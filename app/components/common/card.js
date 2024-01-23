const Card = ({ title, actions, className, children }) => {
    return (
        <div className="card">
            <div className="card-body">
                <div className={`flex justify-between ${!!title || !!actions ? 'mb-3' : ''}`}>
                    <div className="h4 card-title text-dark_gray">{title}</div>
                    <div className="flex">
                        {actions}
                    </div>
                </div>
                <div className={className}>
                    {children}
                </div>
            </div>
        </div>
    )
}
export default Card