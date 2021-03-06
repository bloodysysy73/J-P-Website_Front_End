import React from 'react';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Example extends React.Component {

  componentDidMount() {

  }

  createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('Success message', 'Title here');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
        default:
          NotificationManager.error('default message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  };

  render() {
    return (
      <div className="content">
        <button className='btn btn-info'
          onClick={this.createNotification('info')}>Info
        </button>
        <hr />
        <button className='btn btn-success'
          onClick={this.createNotification('success')}>Success
        </button>
        <hr />
        <button className='btn btn-warning'
          onClick={this.createNotification('warning')}>Warning
        </button>
        <hr />
        <button className='btn btn-danger'
          onClick={this.createNotification('error')}>Error
        </button>
      </div>
    );
  }
}

export default Example;