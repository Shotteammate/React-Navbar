import React, {Component}  from 'react';
import Toolbar from './component/Toolbar/Toolbar';
import SideDrawer from './component/SideDrawer/SideDrawer';
import BackDrop from './component/BackDrop/BackDrop';
class App extends Component {

  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if(this.state.sideDrawerOpen){
      backdrop = <BackDrop backdropClickHandler={this.backdropClickHandler} />;
    }

    return (
      <div style={{height:'100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer showProps={this.state.sideDrawerOpen}/>
        {backdrop}
        <main style={{marginTop:'64px'}}>
          <p>this is the page content</p>
          <p>Duo Reges: constructio interrete. Tu autem negas fortem esse quemquam posse, qui dolorem malum putet. Hic nihil fuit, quod quaereremus. Quid ait Aristoteles reliquique Platonis alumni? Illa argumenta propria videamus, cur omnia sint paria peccata. Quem Tiberina descensio festo illo die tanto gaudio affecit, quanto L. Iam illud quale tandem est, bona praeterita non effluere sapienti, mala meminisse non oportere?</p>
        </main>
        
      </div>
    );
  }
}

export default App;
