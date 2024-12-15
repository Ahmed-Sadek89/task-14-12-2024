
interface IBaseBtnSubmit {
    text: string,
    disabled: boolean
}
const BaseBtnSubmit = ({ text, disabled }: IBaseBtnSubmit) => {
    return (
        <div>
            <button
                disabled={disabled}
                type="submit"
                className="flex justify-center bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-500 shadow-sm px-3 py-1.5 rounded-md w-full font-semibold text-sm/6 text-white disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                {disabled? "Loading..." :text}
            </button>
        </div>
    )
}

export default BaseBtnSubmit
