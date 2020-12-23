import React, { Component } from "react";

import {
  getInfo1TS,
  getInfo1Dt,
  getInfo1Vn,
  getInfo1Dp,
  getInfo2Ex,
  getInfo2Vh,
  getInfo3Pr,
  getInfo3Pu,
  getInfo3Mo,
  getInfo4,
} from "../redux/reducer";
import "./Submit.css";
import { connect } from "react-redux";
import axios from "axios";
import { Button } from "antd";

import {
  EditOutlined
} from "@ant-design/icons";

class Submit extends Component {
  sendInfo = () => {
    const {
      infoPageOneTimeStamp,
      infoPageOneVendor,
      infoPageOneDateOf,
      infoPageOneDepartment,
      infoPageTwoVehicle,
      infoPageTwoExpense,

      infoPageThreePrice,
      infoPageThreePurchaser,
      infoPageThreeMemo,

      infoPageFour,
    } = this.props.reducer;
    let data = [
      infoPageOneTimeStamp,
      infoPageOneVendor,
      infoPageOneDateOf,
      infoPageOneDepartment,

      infoPageTwoVehicle,
      infoPageTwoExpense,
      infoPageFour,
      infoPageThreePrice,
      infoPageThreePurchaser,
      infoPageThreeMemo,
    ];
    axios

      .post("/api/add", { values: data })

      .then((res) => {
        console.log("info submitted");
        this.handleShowTextBoxSubmitted()
      })
      .catch((err) => console.log(err));
  };
  handleShowTextBoxVendor = () => {
    this.setState({showTextBox: !this.state.showTextBox})
    this.setState({ showTextBoxButtonVendor: !this.state.showTextBoxButtonVendor });
    return this.setState({ showTextBoxVendor: !this.state.showTextBoxVendor });
  };
  handleShowTextBoxDateOf = () => {
    this.setState({showTextBox: !this.state.showTextBox})
    this.setState({ showTextBoxButtonDateOf: !this.state.showTextBoxButtonDateOf });
    return this.setState({ showTextBoxDateOf: !this.state.showTextBoxDateOf});
  };
  handleShowTextBoxDepartment = () => {
    this.setState({showTextBox: !this.state.showTextBox})
    this.setState({ showTextBoxButtonDepartment: !this.state.showTextBoxButtonDepartment});
    return this.setState({ showTextBoxDepartment: !this.state.showTextBoxDepartment});
  };
  handleShowTextBoxVehicle = () => {
    this.setState({showTextBox: !this.state.showTextBox})
    this.setState({ showTextBoxButtonVehicle: !this.state.showTextBoxButtonVehicle});
    return this.setState({ showTextBoxVehicle: !this.state.showTextBoxVehicle});
  };
  handleShowTextBoxExpense = () => {
    this.setState({showTextBox: !this.state.showTextBox})
    this.setState({ showTextBoxButtonExpense: !this.state.showTextBoxButtonExpense});
    return this.setState({ showTextBoxExpense: !this.state.showTextBoxExpense});
  };
  handleShowTextBoxRepair = () => {
    this.setState({showTextBox: !this.state.showTextBox})
    this.setState({ showTextBoxButtonRepair: !this.state.showTextBoxButtonRepair});
    return this.setState({ showTextBoxRepair: !this.state.showTextBoxRepair});
  };
  handleShowTextBoxPrice = () => {
    this.setState({showTextBox: !this.state.showTextBox})
    this.setState({ showTextBoxButtonPrice: !this.state.showTextBoxButtonPrice});
    return this.setState({ showTextBoxPrice: !this.state.showTextBoxPrice});
  };
  handleShowTextBoxPurchase = () => {
    this.setState({showTextBox: !this.state.showTextBox})
    this.setState({ showTextBoxButtonPurchaser: !this.state.showTextBoxButtonPurchaser});
    return this.setState({ showTextBoxPurchaser: !this.state.showTextBoxPurchaser});
  };
  handleShowTextBoxMemo = () => {
    this.setState({showTextBox: !this.state.showTextBox})
    this.setState({ showTextBoxButtonMemo: !this.state.showTextBoxButtonMemo});
    return this.setState({ showTextBoxMemo: !this.state.showTextBoxMemo});
  };
  handleShowTextBoxSubmitted = () => {
    
    this.setState({ showTextBoxSubmitted: !this.state.showTextBoxSubmitted});
    this.setState({showForm: !this.state.showForm})
    setTimeout(()=>{this.props.history.push('/')}, 10000)
  };
 
  
  constructor(props) {
    super(props);
    this.state = {
      showTextBox: true,
      showTextBoxButtonVendor: true,
      showTextBoxVendor: false,
      showTextBoxButtonDateOf: true,
      showTextBoxDateOf: false,
      showTextBoxButtonDepartment: true,
      showTextBoxDepartment: false,
      showTextBoxButtonVehicle: true,
      showTextBoxVehicle: false,
      showTextBoxButtonExpense: true,
      showTextBoxExpense: false,
      showTextBoxButtonRepair: true,
      showTextBoxRepair: false,
      showTextBoxButtonPrice: true,
      showTextBoxPrice: false,
      showTextBoxButtonPurchaser: true,
      showTextBoxPurchaser: false,
      showTextBoxButtonMemo: true,
      showTextBoxMemo: false,
      showTextBoxSubmitted: false,
      showForm:true,
      page1index1: "",
    };
  }
  render() {
    const {
      infoPageOneVendor,
      infoPageOneDateOf,
      infoPageOneDepartment,

      infoPageTwoVehicle,
      infoPageTwoExpense,
      infoPageFour,
      infoPageThreePrice,
      infoPageThreePurchaser,
      infoPageThreeMemo,
    } = this.props.reducer;

    return (
      <div className="main-submit">
        <header>
          <h1>Confirm Receipt</h1>
        </header>
        {this.state.showForm && (

        <div className="submit-container">
          <div>
          <div className="submit-item">

            <h2>Vendor:</h2>
            <p>{infoPageOneVendor}</p>

            {this.state.showTextBoxVendor && (
               <div className="submit-item">
                 <div>
                <input
                  placeholder={infoPageOneVendor}
                  onChange={(e) => this.props.getInfo1Vn([e.target.value])}
                />
                <button className="button-done" onClick={this.handleShowTextBoxVendor}>Done</button>

                 </div>
              </div>
            )}
            {this.state.showTextBoxButtonVendor && (
              <div>
                <Button className="button-edit" icon={<EditOutlined style={{  color: "#FFFFFF" }}/>} onClick={this.handleShowTextBoxVendor}/>
              </div>
            )}
          </div>
          </div>

          <div className="submit-item">

            <h2>Date of Receipt:</h2>
            <p>{infoPageOneDateOf}</p>
           
            {this.state.showTextBoxDateOf && (
              <div className="submit-item">
                <div>
                <input
                  placeholder={infoPageOneDateOf}
                  onChange={(e) => this.props.getInfo1Dt([e.target.value])}
                />
                 <button className="button-done" onClick={this.handleShowTextBoxDateOf}>Done</button>

                </div>
              </div>
            )}
            {this.state.showTextBoxButtonDateOf && (
               <div>
                 <Button className="button-edit" icon={<EditOutlined style={{  color: "#FFFFFF" }}/>} onClick={this.handleShowTextBoxDateOf}/>
             </div>
            )}
          </div>

          <div className="submit-item">
            <h2>Department:</h2>
            <p>{infoPageOneDepartment}</p>
            {this.state.showTextBoxDepartment && (
               <div className="submit-item">
                 <div>
                <input
                  placeholder={infoPageOneDepartment}
                  onChange={(e) => this.props.getInfo1Dp([e.target.value])}
                />
                 <button className="button-done" onClick={this.handleShowTextBoxDepartment}>Done</button>

                 </div>

              </div>
            )}
            {this.state.showTextBoxButtonDepartment && (
               <div>
                 <Button className="button-edit" icon={<EditOutlined style={{  color: "#FFFFFF" }}/>} onClick={this.handleShowTextBoxDepartment}/>
             </div>
            )}
          </div>

          <div className="submit-item">
            <h2>Vehicle:</h2>
            <p>{infoPageTwoVehicle}</p>

            {this.state.showTextBoxVehicle && (
                <div className="submit-item">
                  <div>
                <input
                  placeholder={infoPageTwoVehicle}
                  onChange={(e) => this.props.getInfo2Vh([e.target.value])}
                />
                <button className="button-done" onClick={this.handleShowTextBoxVehicle}>Done</button>

                  </div>
              </div>
            )}
             {this.state.showTextBoxButtonVehicle && (
               <div>
                 <Button className="button-edit" icon={<EditOutlined style={{  color: "#FFFFFF" }}/>} onClick={this.handleShowTextBoxVehicle}/>
             </div>
            )}
          </div>

          <div className="submit-item">
            <h2>Type of Expense:</h2>
            <p>{infoPageTwoExpense}</p>
            {this.state.showTextBoxExpense && (
               <div className="submit-item">
                 <div>
                <input
                  placeholder={infoPageTwoExpense}
                  onChange={(e) => this.props.getInfo2Ex([e.target.value])}
                />
                 <button  className="button-done" onClick={this.handleShowTextBoxExpense}>Done</button>

                 </div>
              </div>
            )}
             {this.state.showTextBoxButtonExpense && (
               <div>
                 <Button className="button-edit" icon={<EditOutlined style={{  color: "#FFFFFF" }}/>} onClick={this.handleShowTextBoxExpense}/>
             </div>
            )}
          </div>
          <div className="submit-item">
            <h2>Type of Repair:</h2>
            <p>{infoPageFour}</p>
            {this.state.showTextBoxRepair && (
               <div className="submit-item">
                 <div>

                <input
                  placeholder={infoPageFour}
                  onChange={(e) => this.props.getInfo4([e.target.value])}
                />
                 <button  className="button-done" onClick={this.handleShowTextBoxRepair}>Done</button>
                 </div>
              </div>
            )}
            {this.state.showTextBoxButtonRepair && (
               <div>
                 <Button className="button-edit" icon={<EditOutlined style={{  color: "#FFFFFF" }}/>} onClick={this.handleShowTextBoxRepair}/>
             </div>
            )}
            </div>
            <div className="submit-item">

            <h2>Price:</h2>
            <p>{infoPageThreePrice}</p>
            {this.state.showTextBoxPrice && (
               <div className="submit-item">
                 <div>

                <input
                  placeholder={infoPageThreePrice}
                  onChange={(e) => this.props.getInfo3Pr([e.target.value])}
                />
                 <button className="button-done" onClick={this.handleShowTextBoxPrice}>Done</button>
                 </div>
              </div>
            )}
            {this.state.showTextBoxButtonPrice && (
               <div>
                 <Button className="button-edit" icon={<EditOutlined style={{  color: "#FFFFFF" }}/>} onClick={this.handleShowTextBoxPrice}/>
           
             </div>
            )}
            </div>
            <div className="submit-item">
            <h2>Purchaser:</h2>
            <p>{infoPageThreePurchaser}</p>
            {this.state.showTextBoxPurchaser && (
              <div className="submit-item">
                <div>

                <input
                  placeholder={infoPageThreePurchaser}
                  onChange={(e) => this.props.getInfo3Pu([e.target.value])}
                />
                

                 <button className="button-done" onClick={this.handleShowTextBoxPurchase}>Done</button>
                </div>
              </div>
            )}
            {this.state.showTextBoxButtonPurchaser && (
               <div>
                <Button className="button-edit" icon={<EditOutlined style={{  color: "#FFFFFF" }}/>} onClick={this.handleShowTextBoxPurchase}/>
               
             </div>
            )}
          </div>
          <div className="submit-item3">
            <h2>Memo:</h2>
            <p>{infoPageThreeMemo}</p>
            {this.state.showTextBoxMemo && (
              <div className="submit-item">
                <div>

                <input
                  placeholder={infoPageThreeMemo}
                  onChange={(e) => this.props.getInfo3Mo([e.target.value])}
                />
                 <button className="button-done" onClick={this.handleShowTextBoxMemo}>Done</button>
                </div>
              </div>
            )}
            {this.state.showTextBoxButtonMemo && (
               <div>
               <Button className="button-edit" icon={<EditOutlined style={{  color: "#FFFFFF" }}/>} onClick={this.handleShowTextBoxMemo}/>
             </div>
            )}
          </div>
          <div className="submit-item2">

          {this.state.showTextBox && (
            <div>
              <button onClick={this.sendInfo} className="button-submit" >Submit</button>
             
            </div>
          )}
          </div>
        </div>
        )}
          <div className='popup'>
          {this.state.showTextBoxSubmitted && (
               <div>
                 <div className="form-container-complete">
              <div className='complete-item'>
               <p>Receipt Has been Submitted Successfully</p>

              </div>
 
            </div>
             </div>
            )}
          </div>
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => reduxState;
export default connect(mapStateToProps, {
  getInfo1TS,
  getInfo1Dt,
  getInfo1Vn,
  getInfo1Dp,
  getInfo2Ex,
  getInfo2Vh,
  getInfo3Pr,
  getInfo3Pu,
  getInfo3Mo,
  getInfo4,
})(Submit);
