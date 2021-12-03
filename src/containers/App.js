import {connect} from 'react-redux';
import App from '../App';
import { addBusiness, fetchList } from '../redux/actions';

const mapStateToProps = ({businesses}) => {
    return {
        businesses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBusiness: (body) => dispatch(addBusiness(body)),
        fetchList: () => dispatch(fetchList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)