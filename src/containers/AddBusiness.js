import {connect} from 'react-redux';
import AddBusiness from '../components/AddBusiness';
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

export default connect(mapStateToProps, mapDispatchToProps)(AddBusiness)