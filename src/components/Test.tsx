import React from 'react';

export default class Test extends React.PureComponent<{}, { number: number }> {
    state = { number: 1 };

    public render() {
        return (
            <span>
                <button
                    onClick={() =>
                        this.setState(({ number }) => ({ number: number + 1 }))
                    }
                >
                    X
                </button>
                testme {this.state.number}
            </span>
        );
    }
}
