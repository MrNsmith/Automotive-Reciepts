import React, { Component } from "react";
import axios from "axios";
import dateFormat from "dateformat";
import { connect } from "react-redux";
import {
  getInfo1TS,
  getInfo1Dt,
  getInfo1Vn,
  getInfo1Dp,
} from "../redux/reducer";
import "./Landing.css";
import { AutoComplete, DatePicker, Select, Form, Button } from "antd";
import {
  ShopFilled,
  StepForwardOutlined,
  CalendarFilled,
  CarFilled,
} from "@ant-design/icons";

class Landing extends Component {
  componentDidMount() {
    this.getVendors();
  }
  getVendors = () => {
    axios
      .get("/api/vendors")
      .then((res) => {
        const vendors = res.data;
        var vendorsData = vendors.map(function (item) {
          return item;
        });
        var options = vendorsData.map(function (item) {
          return {
            value: item[0],
          };
        });

        this.setState({ vendorsOptions: options });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  handleDepartmentChange = (value) => {
    this.setState({ departmentChoice: value });
  };
  handleDateChange = (date) => {
    this.setState({
      receiptDate: dateFormat(date, "mm/d/yyyy"),
    });
  };
  onFinish = (values) => {
    console.log(values)
    
    console.log("Success:", values);
    this.addInfo();
  };
  onFinishFailed = (errorInfo) => {
   
    console.log("Failed:", errorInfo);
  };
  addInfo = () => {
    
    this.props.getInfo1TS([dateFormat(new Date(), "mm/d/yyyy")]);
    this.props.getInfo1Dt([dateFormat(this.state.receiptDate, "mm/d/yyyy")]);
    this.props.getInfo1Vn([this.state.vendorChoice]);
    this.props.getInfo1Dp([this.state.departmentChoice]);
    this.props.history.push(`/${this.state.departmentChoice}`);
    //  axios.post('/api/add', {values:this.state.dataOutput} )

    // .then((res)=>{
    //   console.log(this.state.vendorChoice)

    // })
    // .catch(err=>console.log(err))
  };

  constructor(props) {
    super(props);
    this.state = {
      vendorChoice: "",
      receiptDate: "",
      departmentChoice: "",
      vendorsOptions: "",
      autoOptions: "",
    };
  }
  render() {
    const { vendorsOptions ,vendorChoice, receiptDate, departmentChoice} = this.state;
    console.log(vendorChoice,receiptDate,departmentChoice)
    const { Option } = Select;
    return (
      <div className="main">
        <header>
          <h1>Automotive Receipts</h1>
        </header>

        <div>
          <Form
            className="form-container"
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <div className="form-item">
              <ShopFilled style={{ fontSize: "50px", color: "#A02140" }} />

              <label>Vendor:</label>
              <Form.Item
                
                name="Vendor"
                className="auto_complete"
                rules={[
                  {
                    required: true,
                  },
                ]}
                >
                <AutoComplete
                  options={vendorsOptions}
                  placeholder="Enter Vendor Name"
                  
                  onChange={(value) => this.setState({ vendorChoice: value })}
                  filterOption={(inputValue, option) =>
                    option.value
                    .toUpperCase()
                    .indexOf(inputValue.toUpperCase()) !== -1
                  }
                  />
              </Form.Item>
            </div>

            <div className="form-item">
              <CalendarFilled style={{ fontSize: "50px", color: "#A02140" }} />
              <label>Receipt Date:</label>
              <Form.Item
                
                name="Receipt Date"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <DatePicker
                
                placeholder="Receipt Date"
                  className="date_receipt"
                  onChange={(date, dateString) =>
                    this.setState({ receiptDate: dateString })
                  }
                />
              </Form.Item>
            </div>

            <div className="form-item">
              <CarFilled style={{ fontSize: "45px", color: "#A02140" }} />
              <label>Department:</label>
              <Form.Item
              placeholder="Select Department"
              
                rules={[
                  {
                    required: true,
                  },
                ]}
                className="department"
                name="Department"
               
              >
                <Select onChange={this.handleDepartmentChange}
                placeholder="Select Department"
                
                >
                  <Option value="Construction" required>
                    Construction
                  </Option>

                  <Option value="House" required>
                    House
                  </Option>

                  <Option value="Warehouse" required>
                    Warehouse
                  </Option>
                  <Option value="Moco" required>
                    Moco
                  </Option>
                  <Option value="Shop Expense" required>
                    Shop Expense
                  </Option>
                  <Option value="Other" required>
                    Other
                  </Option>
                </Select>
              </Form.Item>
            </div>
            <div className="form-item3">
              <Form.Item>
                <Button
                  className="button-next2"
                  type="primary"
                  htmlType="submit"
                  size={"large"}
                  icon={
                    <StepForwardOutlined
                      style={{ fontSize: "20px", color: "white" }}
                    />
                  }
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

export default connect(null, {
  getInfo1TS,
  getInfo1Dt,
  getInfo1Vn,
  getInfo1Dp,
})(Landing);
