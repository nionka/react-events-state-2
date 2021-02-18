import PropTypes from 'prop-types';

export default function IconSwitch({ icon, onSwitch }) {
    return (
        <div className='icon'>
            <span
                className="material-icons" 
                onClick={() => {icon === 'view_list' ? onSwitch('view_module') : onSwitch('view_list')}}
                >{icon}
            </span>
        </div>
    )
}

IconSwitch.propTypes = {
    icon: PropTypes.string,
    onSwitch: PropTypes.func
}