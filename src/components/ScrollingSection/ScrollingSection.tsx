import { useState } from 'react'

const ScrollingSection: React.FC = () => {
    const [ scroll1, setScroll1 ] = useState(false)
    const [ scroll2, setScroll2 ] = useState(false)

    const handleScroll = () => {
        if (window.scrollY < 300) {
            setScroll1(false)
            setScroll2(false)
        }

        if (window.scrollY > 300 && window.scrollY < 600) {
            setScroll2(false)
            setScroll1(true)
        } else if (window.scrollY > 600) {
            setScroll1(false)
            setScroll2(true)
        }
    }

    window.addEventListener('scroll', handleScroll)

    return (
        <div className="scrolling-section">
            <div className={`scrolling-section__left ${scroll1 ? 'scroll1' : ''} ${scroll2 ? 'scroll2' : ''}`}>
                <div className={`one`}>
                    <div className="text">
                        <h2>This is a Header</h2>
                        <strong>Listen up!</strong>
                        <p>This is some content</p>
                    </div>
                    <div className="text2">
                        <h3>Brand</h3>
                    </div>
                </div>
                <div className={`two`}>
                    <div className="text">
                        <h2>This is a Header</h2>
                        <strong>Listen up!</strong>
                        <p>This is some content</p>
                    </div>
                    <div className="text2">
                        <h3>Brand</h3>
                    </div>
                </div>
                <div className={`three`}>
                    <div className="text">
                        <h2>This is a Header</h2>
                        <strong>Listen up!</strong>
                        <p>This is some content</p>
                    </div>
                    <div className="text2">
                        <h3>Brand</h3>
                    </div>
                </div>
                <div className={`four`}>
                    <div className="text">
                        <h2>This is a Header</h2>
                        <strong>Listen up!</strong>
                        <p>This is some content</p>
                    </div>
                    <div className="text2">
                        <h3>Brand</h3>
                    </div>
                </div>
                <div className={`five`}>
                    <div className="text">
                        <h2>This is a Header</h2>
                        <strong>Listen up!</strong>
                        <p>This is some content</p>
                    </div>
                    <div className="text2">
                        <h3>Brand</h3>
                    </div>
                </div>
                <div className={`six`}>
                    <div className="text">
                        <h2>This is a Header</h2>
                        <strong>Listen up!</strong>
                        <p>This is some content</p>
                    </div>
                    <div className="text2">
                        <h3>Brand</h3>
                    </div>
                </div>
            </div>
            <div className="scrolling-section__right">
                <section>
                    <h1>This is section 1</h1>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                </section>
                <section>
                    <h1>This is section 1</h1>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                </section>
                <section>
                    <h1>This is section 1</h1>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                </section>
                <section>
                    <h1>This is section 1</h1>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                </section>
                <section>
                    <h1>This is section 1</h1>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                </section>
                <section>
                    <h1>This is section 1</h1>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                </section>
                <section>
                    <h1>This is section 1</h1>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                </section>
                <section>
                    <h1>This is section 1</h1>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                </section>
            </div>
        </div>
    )
}

export default ScrollingSection