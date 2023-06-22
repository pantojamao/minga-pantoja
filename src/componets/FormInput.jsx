import React, { useState } from 'react';

const FormInput = ({ label, id, type, placeholder, value, onChange, onClick }) => {
    return (
        <>

            <div className="mb-4 relative">
                {label === 'New Company' && (
                    <div>
                        <h6 className='text-center'>{label}</h6>
                    </div>
                )}
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
                </label>
                {id === 'photo' ? (
                    <div className="relative flex justify-center">
                        <input
                            className="hidden"
                            id={id}
                            type={type}
                            accept="image/*"
                            onChange={onChange}
                        />
                        <label
                            htmlFor={id}
                            className="inline-block w-16 h-16 bg-gray-200 rounded-full border-2 border-gray-300 cursor-pointer"
                        >
                            {value ? (
                                <img
                                    className="w-full h-full object-cover rounded-full"
                                    src={value}
                                    alt="Foto de perfil"
                                />
                            ) : (
                                <span className="text-gray-500 text-sm">Seleccionar foto</span>
                            )}
                        </label>
                    </div>
                ) : (
                    <input
                        className=" w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id={id}
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                    />
                )}
                {id !== 'photo' && <div className="h-0.5 bg-black absolute bottom-0 left-0 right-0"></div>}
            </div>
        </>
    );
};

const MovieForm = () => {
    const [photo, setPhoto] = useState('');
    const [name, setName] = useState('');
    const [website, setWebsite] = useState('');
    const [profileURL, setProfileURL] = useState('');
    const [description, setDescription] = useState('');

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setPhoto(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Foto:', photo);
        console.log('Nombre:', name);
        console.log('Website:', website);
        console.log('URL de perfil:', profileURL);
        console.log('Descripción:', description);
    };

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <FormInput
                    label="New Company"
                    id="photo"
                    type="file"
                    value={photo}
                    onChange={handlePhotoChange}
                />
                <FormInput
                    label="Nombre"
                    id="name"
                    type="text"
                    placeholder="Nombre de la película"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <FormInput
                    label="Website"
                    id="website"
                    type="text"
                    placeholder="URL del website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                />
                <FormInput
                    label="URL de Perfil"
                    id="profileURL"
                    type="text"
                    placeholder="URL del perfil"
                    value={profileURL}
                    onChange={(e) => setProfileURL(e.target.value)}
                />
                <FormInput
                    label="Descripción"
                    id="description"
                    type="text"
                    placeholder="Descripción de la película"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MovieForm;
