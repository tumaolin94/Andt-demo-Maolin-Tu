import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { DatePicker, message } from 'antd';

const dateFormat = 'YYYY-MM-DD';

class App extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  
  
  handleChange(date) {
    message.info('您选择的日期是: ' + date.toString());
    this.setState({ date });
  }



  disabledDate(current) {
  // 设置可用时间范围为今天至2017/08/31
  return (current.valueOf() > moment('2017/09/01', dateFormat) || current.valueOf() < (Date.now()-86400000));
}
  

  render() {
   
    return (
      <div style={{ width: 400, margin: '100px auto' }}>
	    <h1>日期选择器</h1>
        <DatePicker
          disabledDate={this.disabledDate}
          defaultValue={moment()}
          onChange={value => this.handleChange(value)}
         
        />
        <div style={{ marginTop: 20 }}>选择日期为：{this.state.date.toString()}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));