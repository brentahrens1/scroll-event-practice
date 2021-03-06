import { useState } from 'react'

const ScrollingSection: React.FC = () => {
    const [ scroll, setScroll ] = useState('')

    const handleScroll = () => {
        if (window.scrollY < 300) {
            setScroll('')
        }

        if (window.scrollY > 300 && window.scrollY < 650) {
            setScroll('scroll1')
        } else if (window.scrollY > 650) {
            setScroll('scroll2')
        }
    }

    window.addEventListener('scroll', handleScroll)

    return (
        <div className="scrolling-section">
            <div className={`scrolling-section__left ${scroll}`}>
                <div className={`one`}>
                    <div className="text-number">
                        <p>1. The Start</p>
                    </div>
                    <div className="text1">
                        <h2>This is a Header</h2>
                        <strong>Listen up!</strong>
                        <p>This is some content</p>
                    </div>
                    <div className="text2">
                        <h3>Brand</h3>
                    </div>
                </div>
                <div className={`two`}>
                    <div className="text-number">
                        <p>2. The Grind</p>
                    </div>
                    <div className="text1">
                        <h2>This is a Header</h2>
                        <strong>Listen up!</strong>
                        <p>This is some content</p>
                    </div>
                    <div className="text2">
                        <h3>Brand</h3>
                    </div>
                </div>
                <div className={`three`}>
                    <div className="text-number">
                        <p>3. The Journey</p>
                    </div>
                    <div className="text1">
                        <h2>This is a Header</h2>
                        <strong>Listen up!</strong>
                        <p>This is some content</p>
                    </div>
                    <div className="text2">
                        <h3>Brand</h3>
                    </div>
                </div>
                <div className={`four`}>
                    <div className="text-number">
                        <p>4. The Reason</p>
                    </div>
                    <div className="text1">
                        <h2>This is a Header</h2>
                        <strong>Listen up!</strong>
                        <p>This is some content</p>
                    </div>
                    <div className="text2">
                        <h3>Brand</h3>
                    </div>
                </div>
                <div className={`five`}>
                    <div className="text-number">
                        <p>5. The Mission</p>
                    </div>
                    <div className="text1">
                        <h2>This is a Header</h2>
                        <strong>Listen up!</strong>
                        <p>This is some content</p>
                    </div>
                    <div className="text2">
                        <h3>Brand</h3>
                    </div>
                </div>
                <div className={`six`}>
                    <div className="text-number">
                        <p>6. The Goal</p>
                    </div>
                    <div className="text1">
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