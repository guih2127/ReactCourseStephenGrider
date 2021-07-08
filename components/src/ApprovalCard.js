import React from 'react';

const ApprovalCard = props => {
    return (
        <div className="ui card">
            <div className="content">{props.children}</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>
    );
};

// criamos um componente bastante reutilizável, pois ele recebe por props um componente,
// que será renderizado sempre antes dos nossos botões de approve e reject.

export default ApprovalCard;