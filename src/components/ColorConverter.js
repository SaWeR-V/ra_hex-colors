import React, { useEffect } from "react";

export function ColorConverter() {
    useEffect(() => bkgChanger());

    return (
        <div className="blocks">
            <label>
                <input className="hex-block" id={'hex'} defaultValue={'#009900'} onInput={bkgChanger} maxLength={7}/>
            </label>
            <label>
                <input className="result-block" id={'convertation-result'} disabled/>
            </label>
        </div>
    )

    function bkgChanger() {
        const body = document.querySelector('body');
        const hex = document.getElementById('hex');
        const result = document.getElementById('convertation-result');
        const regex = new RegExp(/^#[0-9a-f]+$/i);

        if (hex.value.length === 0) {
            hex.value = '#'
        }

        if (!regex.test(hex.value)) {
            result.value = 'Ошибка!'
        }
        else if (regex.test(hex.value) && hex.value.length === 7) {
            body.style.backgroundColor = hex.value;
            result.value = body.style.backgroundColor;
        }
        else {
            result.value = ''
        }
    }
}