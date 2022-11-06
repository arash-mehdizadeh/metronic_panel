
const NextCancelButtons = () => {
    return (
        <div>
            <button>انصراف</button>
            <button>بعدی</button>
        </div>
    )
}
const NextPreviewCancelButton = () => {
    return (
        <div>
            <button>انصراف</button>
            <button>پیش نمایش تکلیف</button>
            <div>
                <button>مرحله قبل</button>
                <button>بعدی</button>
            </div>
        </div>
    )
}

export { NextCancelButtons, NextPreviewCancelButton }