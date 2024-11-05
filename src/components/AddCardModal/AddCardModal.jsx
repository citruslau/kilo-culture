import React from 'react';
import Rodal from 'rodal';
import "rodal/lib/rodal.css";
import css from './AddCardModal.module.css';

const AddCardModal = ({ visible, onClose, handleCardAdd }) => {
    const customStyles = {
        background: "rgb(58 58 58)",
        padding: "20px",
        width: "50%",
        top: "-3rem",
        height: "fit-content",
        maxWidth: "40rem"
    };

    const [title, setTitle] = React.useState('');
    const [detail, setDetail] = React.useState('');
    const [amount, setAmount] = React.useState(''); // New state for amount

    return (
        <Rodal customStyles={customStyles} visible={visible} onClose={onClose}>
            <div className={css.container}>
                <div>
                    <span className={css.label}>Card Title</span>
                    <input
                        type="text"
                        className={css.input}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div>
                    <span className={css.label}>Detail</span>
                    <textarea
                        rows={10}
                        className={css.input}
                        value={detail}
                        onChange={(e) => setDetail(e.target.value)}
                    />
                </div>

                <div>
                    <span className={css.label}>Amount</span>
                    <input
                        type="number" // Use number input type
                        className={css.input}
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>

                <button
                    disabled={title === "" && detail === "" && amount === ""}
                    className={css.saveButton}
                    onClick={() => {
                        handleCardAdd(title, detail, amount); // Pass amount to the handler
                        setDetail("");
                        setTitle("");
                        setAmount(""); // Reset amount
                    }}
                >
                    Add
                </button>
            </div>
        </Rodal>
    );
};

export default AddCardModal;
