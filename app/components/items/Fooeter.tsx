import React from 'react';

const Footer = () => {
    const footerNavs = [
        {
            label: 'Enlaces Útiles',
            items: [
                { href: 'javascript:void(0)', name: 'Aviso Legal' },
                { href: 'javascript:void(0)', name: 'Política de Privacidad' },
                { href: 'javascript:void(0)', name: 'Política de cookies' },
            ],
        },
        {
            label: 'Contacto',
            items: [
                { href: 'mailto:contacto@Vidalaboralonline.site', name: 'contacto@Vidalaboralonline.site' },
                { href: 'tel:919612316', name: '919 612 316' },
            ],
        },
    ];

    return (
        <footer className="text-gray-500 bg-gray-950 border-top-1 border-t-black px-4 py-8 md:px-8 shadow-lg">
            <div className="max-w-screen-xl mx-auto gap-6 md:flex">
                <div className="md:flex-1 md:w-1/2">
                    <div className="max-w-md">
                        <h1 className="text-white">Logo Placeholder</h1>
                        <p className="leading-relaxed mt-2 text-gray-300 text-[15px]">
                            En Vidalaboralonline.site, formamos parte de una asesoría administrativa independiente de la Seguridad Social. En nuestra plataforma online ayudamos a gestionar el informe de vida laboral y proporcionar apoyo al usuario para corregir errores en sus datos informándoles de los pasos a seguir.
                        </p>
                    </div>
                </div>

                <div className="md:flex-1 mt-10 md:mt-0 md:w-1/2 grid grid-cols-2 gap-6">
                    {footerNavs.map((nav, index) => (
                        <ul key={index} className="space-y-4">
                            <h4 className="text-white font-medium">{nav.label}</h4>
                            {nav.items.map((item, idx) => (
                                <li key={idx}>
                                    <a href={item.href} className="text-gray-300 hover:underline hover:text-indigo-600">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
