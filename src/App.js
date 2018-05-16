import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import DebitsList from './components/DebitsList';
import CreditsList from './components/CreditsList';


import axios from 'axios'
class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      }
    }
    this.mockLogIn=this.mockLogIn.bind(this);
  }
  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }
  componentDidMount(){
    let sdebits;
    axios.get('/debits').then((res)=>{
      sdebits= res.data.reduce((total,{amount})=>{
      return total+amount;
      },0);
      let scredits;
      axios.get('/credits').then((res)=>{
        scredits=res.data.reduce((total,{amount})=>{
          return total+amount;
          },0);
          console.log(scredits);
          this.setState({
            accountBalance: scredits-sdebits
          });
  
      })
      
      
    })
    
   
  }

  render() {

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)
    const constDebitsList = () => (<DebitsList accountBalance={this.state.accountBalance} />)
    const constCreditList = () => (<CreditsList accountBalance={this.state.accountBalance} />)

    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/debits" render={constDebitsList} />
            <Route exact path="/credits" render={constCreditList} />

            
          </div>
        </Router>
    );
  }

}

export default App;