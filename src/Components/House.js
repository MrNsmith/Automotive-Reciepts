import React, { Component } from "react";
import axios from "axios";

import { Form, Input, Select, Button } from "antd";
import { connect } from "react-redux";
import { getInfo2Ex, getInfo2Vh ,getInfo4} from "../redux/reducer";
import { StepForwardOutlined, CarFilled , DashboardFilled, RedoOutlined} from "@ant-design/icons";

class House extends Component {
  componentDidMount() {
    this.getCnVehicles();
  }

  //gets all Vehicles from  google SpreadSheet
  getCnVehicles = () => {
    axios
      .get("/api/hsVehicles")
      .then((res) => {
        const cnVehicle = res.data;

        this.setState({ cnVehicle: cnVehicle });
      })

      .catch((error) => {
        console.log(error);
      });
  };
  //check if value selected is equal to Other and if so it displays a text input
  handleShowTextBox = (value) => {
    if (value === "Other") {
      console.log("true");
      return this.setState({ showTextBox: true });
    } else {
      console.log("false");

      return this.setState({ showTextBox: false });
    }
  };
  // sets state from Other selections input
  handleOtherInput = (e) => {
    this.setState({ otherInput: e.target.value });
  };

  //check for validation on required field the sends info to redux
  onFinish = (values) => {
    console.log("Success:", values);
    this.addInfo();
  };
  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  //sets the state for Choice of Vehicle
  handleChange = (value) => {
    this.setState({ vehicleChoice: value });
  };
  //sets the state for  Choice of Repair then Check if it should display input box
  handleChange2 = (value) => {
    this.setState({ repairChoice: value });
    this.handleShowTextBox(value);
  };
  //pulls info from state and sends it to redux
  addInfo = () => {
    const { vehicleChoice, repairChoice, otherInput } = this.state;
    this.props.getInfo2Vh([vehicleChoice]);
    this.props.getInfo2Ex([`${repairChoice} ${otherInput}`]);

    this.props.history.push(`/${this.state.repairChoice}`);
  };
  constructor(props) {
    super(props);

    this.state = {
      cnVehicle: [],
      showTextBox: false,
      otherInput: "",
      repairChoice: "",
      vehicleChoice: "",
      layout: {
        labelCol: { span: 8 },
        wrapperCol: { span: 10 },
      },
    };
  }

  render() {
    const { Option } = Select;
    //mapping Vehicles from Google SpreadSheets to be displayed into a select box as a Option
    const mappedVehicle = this.state.cnVehicle.map((item, i) => (
      <Option key={i} value={`${item}`} required>
        {item}
      </Option>
    ));

    const { showTextBox } = this.state;
    return (
      <div className="main">
        <header>
        <h1>Automotive Receipts</h1>
        </header>
        <div>
          <Form
           className="form-container"
            {...this.state.layout}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <div className="form-item">
            <CarFilled style={{ fontSize: "50px", color: "#A02140" }} />
            <label>Vehicle:</label>
            <Form.Item
              name="Vehicle"
              className="choice"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                id="vc"
                placeholder="Choose Vehicle"
                style={{ width: 200 }}
                onChange={this.handleChange}
              >
                {mappedVehicle}
              </Select>
            </Form.Item>
              </div> 
              <div className="form-item">

            <DashboardFilled style={{ fontSize: "50px", color: "#A02140" }}/>
            <label>Repair Type:</label>
            <Form.Item
              name="Repair"
              className="choice"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                id="rc"
                placeholder="Repair Type"
                style={{ width: 200 }}
                onChange={this.handleChange2}
              >
                <Option value="Maintenance" required>
                  Maintenance
                </Option>

                <Option value="Repair" required>
                  Repair
                </Option>

                <Option value="Other" required>
                  Other
                </Option>
              </Select>
            </Form.Item>

            {showTextBox && (
              <div className="form-item3">

              <Form.Item
                {...this.state.layout}
                name="Explain"
                label="Please Explain"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input
                  onChange={this.handleOtherInput}
                  placeholder="Please explain"
                />
              </Form.Item>
              </div>
            )}
              </div>
              <div className="form-item3">
              <Form.Item>
                <Button
                  size={"large"}
                  className="button-next"
                  type="primary"
                  onClick={() => this.props.history.push(`/`)}
                  icon={<RedoOutlined 
                    
                      style={{ fontSize: "20px", color: "white" }}
                    />
                  }
                >
                  Restart
                </Button>
                </Form.Item>
                </div>
                <div className="form-item3">

                <Form.Item>
                <Button
                  size={"large"}
                  icon={
                    <StepForwardOutlined
                      style={{ fontSize: "20px", color: "white" }}
                    />
                  }
                  className="button-next"
                  type="primary"
                  htmlType="submit"
                >
                  Next
                </Button>

                </Form.Item>
                </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default connect(null, { getInfo2Ex, getInfo2Vh,getInfo4 })(House);
