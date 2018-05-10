import React, { Component } from 'react';
import { CustomComponent3 } from 'components';
import classNames from 'classnames/bind';
import styles from './common.css';

const cx = classNames.bind(styles);

class Example3 extends Component {
  render(){
    return(
      <React.Fragment>
      <div className={cx("Example-wrapper")}>
        <div className={cx("Example-header")}>
          <h2>React-Motion 라이브러리</h2>
          <h4>
            <p>React Motion은 Cheng Lou가 만든 라이브러리 입니다.</p>
            <p>기본적인 아이디어는 “Spiring”이라는 API로 참조되는 것을 사용하는 것으로</p>
            <p>React Motion에서 제공하는 리액트 컴포넌트에 style을 설정하는 것입니다. Callback function으로 style value를 받아서 사용합니다.</p>
          </h4>
        </div>
        <CustomComponent3/>

        <ol className={cx("Example-text")}>
          <li> react-motion에서 Motion과 spring을 import </li>
          <li> initial state에서 height를 38로 세팅하고, styles의 menu height를 바꾸는 데 쓸 것입니다.</li>
          <li> animate method는 현재 height 값으로 state의 height 값을 세팅하는데 사용되는데, height가 38이면 250이 되고, 그렇지 않으면 38이 될 것입니다. </li>
          <li> Render에서 Motion component는 p 태그의 리스트를 감싸는데 씁니다. Motion의 style property를 세팅하면 this.state.height의 값이 height 값으로 할당됩니다. 이제 height는 Motion component에서 callback으로 사용할 수 있습니다. p 태그 리스트를 감싸고 있는 div의 height값으로 선언하여 callback을 쓸 수 있습니다.</li>
          <li> 버튼을 클릭하면 this.animate를 호출함으로써 height 애니메이션을 토글할 수 있습니다.</li>
        </ol>

      </div>
      </React.Fragment>
    );
  }
}

export default Example3;
