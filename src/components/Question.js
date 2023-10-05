import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const Question = (props) => {
  console.log(props);
  console.log('id: ', props.router.params.id);
  return (
    <>
      <h1>Question</h1>
    </>
  );
};

const mapStateToProps = ({ props }) => ({});
export default withRouter(connect(mapStateToProps)(Question));