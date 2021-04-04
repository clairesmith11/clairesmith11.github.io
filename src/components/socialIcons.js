import React from 'react';

const SocialIcons = ({ color }) => {
    return (
        <div className="d-flex">
            <a target="blank" href="https://github.com/clairesmith11"><svg className={`social-icon ${color}`} viewBox="0 0 128 128">
                <g><path fill-rule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
            </svg></a>
            <a target="blank" href="https://www.linkedin.com/in/claire-smith-105835207/"><svg className={`social-icon ${color}`} viewBox="0 0 128 128">
                <path id="plain" d="M116,3H12a8.91,8.91,0,0,0-9,8.8V116.22A8.91,8.91,0,0,0,12,125H116a8.93,8.93,0,0,0,9-8.81V11.77A8.93,8.93,0,0,0,116,3ZM39.17,107H21.06V48.73H39.17Zm-9-66.21a10.5,10.5,0,1,1,10.49-10.5A10.5,10.5,0,0,1,30.12,40.77ZM107,107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87,7.36-10.87,15V107H50.53V48.73H67.89v8h.24c2.42-4.58,8.32-9.41,17.13-9.41C103.6,47.28,107,59.35,107,75Z"></path>
            </svg></a>
            <a target="blank" href="https://codepen.io/csmith2011/pens/public"><svg className={`social-icon ${color}`} viewBox="0 0 128 128">
                <path d="M125.571 39.926L67.0715 0.925997C65.0744 -0.303094 62.9434 -0.314225 60.9285 0.925997L2.42867 39.926C0.928561 40.9256 0 42.712 0 44.4971V83.4971C0 85.2827 0.928561 87.0686 2.42895 88.0682L60.9288 127.074C62.9254 128.303 65.0566 128.314 67.0715 127.074L125.571 88.0682C127.071 87.0692 128 85.2827 128 83.4971V44.4971C128 42.712 127.071 40.9256 125.571 39.926ZM69.5001 15.7825L112.571 44.4971L93.3566 57.3548L69.5001 41.4259V15.7825ZM58.4999 15.7825V41.4256L34.6422 57.3545L15.4285 44.4968L58.4999 15.7825ZM10.9997 54.7828L24.7856 63.9972L10.9997 73.2117V54.7828ZM58.4999 112.212L15.4285 83.4971L34.6422 70.6399L58.4999 86.5689V112.212ZM64 76.9966L44.5715 63.9972L64 50.997L83.4285 63.997L64 76.9966ZM69.5001 112.212V86.5692L93.3566 70.6402L112.571 83.4974L69.5001 112.212ZM117 73.2117L103.214 63.9972L117 54.7828V73.2117Z"></path>
            </svg></a>
        </div>
    );
};

export default SocialIcons;
