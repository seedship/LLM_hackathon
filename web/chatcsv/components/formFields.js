import React from 'react';

export const FileField = ({ label, name, value, helpText = '', onChange, error, fields }) => {
    const {filepath, file } = value || {};
    return (
        // component for file upload
        <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor={name}>
                {label}
            </label>
            <div className="flex items-center">
                <input

                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id={name}
                    name={name}
                    type="file"
                    onChange={onChange}
                />
                <button

                    className="px-3 py-2 ml-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-gray-600 border border-transparent rounded-lg active:bg-gray-600 hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray"
                    type="button"
                    onClick={onChange}
                >
                    Upload
                </button>
            </div>
            {helpText && <p className="mt-2 text-sm text-gray-500">{helpText}</p>}
            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
            {filepath && (
                <div className="mt-2">
                    <p className="text-sm text-gray-500">File uploaded: {filepath}</p>
                    <p className="text-sm text-gray-500">File name: {file.name}</p>
                    <p className="text-sm text-gray-500">File size: {file.size}</p>
                </div>
            )}
        </div>
    );
};
