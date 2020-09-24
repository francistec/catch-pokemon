import React from 'react';

export const SearchBox = () => {
    return (
        <>
            <div className="form-control">
                <label>Name</label>
                <input type="text" placeholder="Search your pokemon" />
                <button>Catch NOW!</button>
            </div>
        </>
    );
}
