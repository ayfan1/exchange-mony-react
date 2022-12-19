import React, { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css";

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <h1 className="from__header">
                Currency converter
            </h1>
            <p>
                <label>
                    <span className="form__labelText">
                        Amount in PLN*:
                    </span>
                    <input
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        placeholder="Enter amount in PLN"
                        className="form__field"
                        type="number"
                        required
                        step="0.01"
                    />
                </label>
            </p>
            <p>
                <label>
                    <span className="form__labelText">
                        Currency
                    </span>
                    <select
                        className="form__field"
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                    >
                        {currencies.map((currency => (
                            <option
                                key={currency.short}
                                value={currency.short}
                            >
                                {currency.name}
                            </option>
                        )))}
                    </select>
                </label>
            </p>
            <p>
                <button className="form__button">Recalculate!</button>
            </p>

            <p className="form__info">
                Courses from website kantor-centrum.pl 2022-12-02.
            </p>

            <Result result={result} />
        </form>
    );
};