import { ErrorMessage, Field } from 'formik'

interface IBaseInput {
    label: string,
    id: string,
    name: string,
    type?: string
}
const BaseInput = ({
    label,
    id,
    name,
    type = "text"
}: IBaseInput) => {
    return (
        <div>
            <label htmlFor={id} className="block font-medium text-black text-sm/6">
                {label}
            </label>
            <div className="mt-2">
                <Field
                    id={id}
                    name={name}
                    type={type}
                    className="block bg-white px-3 py-1.5 rounded-md w-full text-base text-black placeholder:text-gray-400 sm:text-sm/6 -outline-offset-1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 outline outline-1 outline-gray-300"
                />
                <ErrorMessage name={name} component="div" className="font-bold text-red-600 text-sm italic" />
            </div>
        </div>
    )
}

export default BaseInput
