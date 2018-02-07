/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

// Sy - Redux extensions
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
// Sy -- Call actions and reducer in Comp
import reducer from './redux/reducer';
import saga from './redux/saga';
import { getData } from './redux/actions';

// Sub Components.
import H1 from 'components/H1';
import messages from './messages';

class FeaturePage extends React.Component {
  state = {
    inputVal: null
  }
  // eslint-disable-line react/prefer-stateless-function
  handleClickFrm (e) {
    if (this.refs.nameText !== null) {
      this.props.clickLoad(e, this.refs.nameText.value);
    }
  }

  render() {
    const {repos} = this.props;
    return (
      <div>
        <Helmet>
          <title>Feature Page</title>
          <meta name="description" content="Feature page of React.js Boilerplate application" />
        </Helmet>
        <H1>
          Send Request to API with SAGA FLOW
        </H1>
        <div className="my-custome">
          <input

                  type="text"
                  placeholder="Type your name to send to server"
                  ref="nameText"
                />
          <button
            className="btn"
            type="button"
            onClick={(e) => this.handleClickFrm(e)}
            >Click Load</button>
          {repos && repos.loading &&
            <p>Loading ...</p>
          }
          {repos && !repos.error && repos.data &&
            <div>
              {repos.data && <p>Result: {repos.data.original}</p>}
              <hr />
              <p>This is json result</p>
              <pre>
                {JSON.stringify(repos, null, 2) }
              </pre>

            </div>
          }
        </div>

      </div>
    );
  }
}

FeaturePage.propTypes = {
  clickLoad: PropTypes.func,
  data: PropTypes.object,
};

// Sy - prepare for Connect Redux and comp
export function mapDispatchToProps(dispatch) {

  return {
    clickLoad: (evt, val) => {

      if (evt !== undefined && evt.preventDefault) evt.preventDefault();

      dispatch(getData({
        nameText: val
      }));
    },
  };
}

function mapStateToProps (state) {
  //console.log('inComp', state.get('feature').data);
  const repos = state.get('feature');
  return {
    repos
  };
};


const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'feature', reducer });
const withSaga    = injectSaga({ key: 'feature', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(FeaturePage);

//export default connect(mapStateToProps, mapDispatchToProps)(FeaturePage);
