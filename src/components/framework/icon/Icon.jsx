import React from "react";

class Icon extends React.Component {

    render() {
        return (
            <i className={this.props.classNames} />
        );
    }

}

export const Spinner = (props) => {
    return <Icon classNames={"fa fa-spinner fa-spin fa-fw " + props.classNames} />;
};

export const TimesCircle = (props) => {
    return <Icon classNames={"fa fa-times-circle " + props.classNames} />;
};