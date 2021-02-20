const Action = ({ hasOptions, handlePick }) => (
    <div>
            <button className="big_button" disabled={hasOptions} onClick={handlePick}>What Should I Do ?</button>
        </div>
)

export default Action