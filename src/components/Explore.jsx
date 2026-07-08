import React from 'react';

const Explore = () => {
    return (
        <section id="explore">
            <div className="container">
                <div className="row row__column">
                    <h2>
                        Explore More <span className="purple"> Books</span>
                    </h2>
                    <a href="/books"></a>
                    <button className="btn">Explore Books</button>

                </div>
            </div>
        </section>

    );
}

export default Explore;