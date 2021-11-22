//create a container for specific component to link up to redux

import {connect} from 'react-redux';
import Listings from '../components/Listings';
import { fetchList } from '../redux/actions';

const mapStateToProps = ({businesses}) => {
    return {
        businesses
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchList: () => dispatch(fetchList())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Listings);