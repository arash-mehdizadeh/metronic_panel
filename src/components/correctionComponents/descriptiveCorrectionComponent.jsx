import { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';


// import './descriptiveQuestion.scss';


const PdfUploadableCorrectionComponent = () => {

    const id = 2;
    // const musicURL = audioURL;
    // AudioController
    
    // const { playing, toggle, duration, curTime, setClickedTime } = AudioController(musicURL);
    const { register, getValue ,handleSubmit } = useForm();

    const handleOnSubmit = () => {

    }

    return (
        <div className='descriptive-question--container' onSubmit={handleSubmit(d => console.log(d))} key={id}>
            <form onSubmit={handleOnSubmit} className='descriptive-question' >
                <div className='question-scoring--container'>
                    <p className='input-title input--scoring-custom' style={{ width: "50px" }}>سوال {id} :</p>
                </div>
                <div className='descriptive-question--detail'>

                    <div className='descriptive-question--detail-container'>
                        <p>جواب کاربر :</p>
                        <p>ﻭﻗﺘﯽ ﮐﻪ ﻫﻤﻪ ﺗﺸﻨﻪ ﻟﺐ ﺑﻮﺩﻧﺪ ﺗﻨﻬﺎ ﺗﻮ ﺑﻮﺩﯼ ﮐﻪ ﺑﻪ ﻫﻤﻪ ﺁﺏ ﺩﺍﺩﯼ ﺳﺮﺗﻮ ﺗﻮ ﺑﭽﮕﯿﺖ ﺑﺮﯾﺪﻥ ﺗﻮﯾﯽ ﮐﻪ ﻋﻠﻤﺪﺍﺭﯼ ﻭ ﺁﺯﺍﺩﯼ ﻓﺪﺍﯼ ﻣﻈﻠﻮﻣﯿﺘﺖ ﺳﯿﺪ ، ﻓﺪﺍﯼ ﻏﯿﺮﺕ ﻭ ﺍﻣﻨﯿﺘﺖ ﺳﯿﺪ ﺁﺥ ﮐﻪ ﭼﻪ ﺟﻨﮕﺎﯾﯽ ﮐﻪ ﺗﻮ ﻧﺮﻓﺘﯽﺁﺭﻩ ﺳﺮﮐﺶ ﻭ ﺳﺮﺑﻠﻨﺪﯼ ﺳﯿﺪ ﺗﻮ ﭘﺮﺩﻩ ﻫﺎﯼ ﺩﺭﻭﻏﻮ ﺩﺭﯾﺪﯼ ﻗﺎﻋﺪﻩ ﭼﯿﻪ ! ﺗﻮ ﺧﻮﻥ ﻏﻠﻄﯿﺪﯼ ﺗﻮ ﻣﺎﺷﯿﻦ ﭘﺎﺭﮎ ﺑﺎﻍ ﻭ ﺧﻮﻧﻪ ﺧﺎﻟﯽ ، ﻭﺍﺳﻪ ﺷﺮﻑ ﻭ ﺣﯿﺜﯿﺘﺖ ﺟﻨﮕﯿﺪﯼ ﻣﻤﺪ ﻧﻮﺑﺮﯼ ﺩﻝ ﺧﺎﻧﻮﻣﺎﺭﻭ ﻣﯽ ﺑﺮﯼ ﻣﻤﺪﺟﺎﻥ ﺗﻤﺎﻡ ﻗﺴﻢ ﻫﺎﻡ ﺑﻪ ﺳﺮ ﺗﻮ ﺑﻮﺩ ، ﻓﺪﺍﯼ ﺗﻮ ﺷﺪ ﻫﻤﻪ ﺑﻮﺩ ﻭ ﻧﺒﻮﺩ ﺍﺯ ﺭﻭﺯ ﺍﻟﺴﺖ ﺑﻪ ﻋﺸﻘﺖ ﺍﺳﯿﺮﻡ</p>
                        <div className=''>
                            {/* {imageURL && <img src={"imageURL"} alt={"body"} />} */}
                            {/* <p>image</p> */}
                            
                        </div>
                    </div>
                    <textarea className='input--textarea' rows="15" {...register("correctAnswer")} placeholder='پاسخ را اینجا بنویسید ...' />
                    <div className='input-title descriptive-scoring--container'>
                        <p>نمره :</p>
                        <input type="number" {...register("correctedScore")} className='input--score' />
                    </div>
                    <div className='descriptive-question--submitBtn'>
                        <button type='submit' id='submitBtn'>ثبت</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

const DescriptiveCorrectionComponent = () => {

    const { register, getValue ,handleSubmit } = useForm();

    const handleOnSubmit = () => {

    }

    const id = 1;
    return (
        <div className='descriptive-question--container' key={id}>
            <form onSubmit={handleOnSubmit} className='descriptive-question' >
                <div className='question-scoring--container'>
                    <p className='input-title input--scoring-custom' style={{width : "50px"}}>سوال {id} :</p>
                </div>
                <div className='descriptive-question--detail'>
                    <div className='descriptive-question--detail-container'>
                        <p>کدام ممد ,ممد نوبری درست است؟</p>
                        <div>Image</div>
                        <div>Voice</div>
                    </div>
                    <div>
                        <p>جواب کاربر :</p>
                        <p>ﻭﻗﺘﯽ ﮐﻪ ﻫﻤﻪ ﺗﺸﻨﻪ ﻟﺐ ﺑﻮﺩﻧﺪ ﺗﻨﻬﺎ ﺗﻮ ﺑﻮﺩﯼ ﮐﻪ ﺑﻪ ﻫﻤﻪ ﺁﺏ ﺩﺍﺩﯼ ﺳﺮﺗﻮ ﺗﻮ ﺑﭽﮕﯿﺖ ﺑﺮﯾﺪﻥ ﺗﻮﯾﯽ ﮐﻪ ﻋﻠﻤﺪﺍﺭﯼ ﻭ ﺁﺯﺍﺩﯼ ﻓﺪﺍﯼ ﻣﻈﻠﻮﻣﯿﺘﺖ ﺳﯿﺪ ، ﻓﺪﺍﯼ ﻏﯿﺮﺕ ﻭ ﺍﻣﻨﯿﺘﺖ ﺳﯿﺪ ﺁﺥ ﮐﻪ ﭼﻪ ﺟﻨﮕﺎﯾﯽ ﮐﻪ ﺗﻮ ﻧﺮﻓﺘﯽﺁﺭﻩ ﺳﺮﮐﺶ ﻭ ﺳﺮﺑﻠﻨﺪﯼ ﺳﯿﺪ ﺗﻮ ﭘﺮﺩﻩ ﻫﺎﯼ ﺩﺭﻭﻏﻮ ﺩﺭﯾﺪﯼ ﻗﺎﻋﺪﻩ ﭼﯿﻪ ! ﺗﻮ ﺧﻮﻥ ﻏﻠﻄﯿﺪﯼ ﺗﻮ ﻣﺎﺷﯿﻦ ﭘﺎﺭﮎ ﺑﺎﻍ ﻭ ﺧﻮﻧﻪ ﺧﺎﻟﯽ ، ﻭﺍﺳﻪ ﺷﺮﻑ ﻭ ﺣﯿﺜﯿﺘﺖ ﺟﻨﮕﯿﺪﯼ ﻣﻤﺪ ﻧﻮﺑﺮﯼ ﺩﻝ ﺧﺎﻧﻮﻣﺎﺭﻭ ﻣﯽ ﺑﺮﯼ ﻣﻤﺪﺟﺎﻥ ﺗﻤﺎﻡ ﻗﺴﻢ ﻫﺎﻡ ﺑﻪ ﺳﺮ ﺗﻮ ﺑﻮﺩ ، ﻓﺪﺍﯼ ﺗﻮ ﺷﺪ ﻫﻤﻪ ﺑﻮﺩ ﻭ ﻧﺒﻮﺩ ﺍﺯ ﺭﻭﺯ ﺍﻟﺴﺖ ﺑﻪ ﻋﺸﻘﺖ ﺍﺳﯿﺮﻡ</p>
                        <div>Image</div>
                    </div>
                    <textarea className='input--textarea' rows="15" {...register("correctAnswer")} placeholder='پاسخ را اینجا بنویسید ...' />
                    <div className='input-title descriptive-scoring--container'>
                        <p>نمره :</p>
                        <input type="number" {...register("correctedScore")} className='input--score' />
                    </div>
                    <div className='descriptive-question--submitBtn'>
                        <button type='submit' id='submitBtn'>ثبت</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export { DescriptiveCorrectionComponent, PdfUploadableCorrectionComponent };