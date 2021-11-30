import React from "react"
import {APP_NAME} from "../../../xpAdapter/enonic-connection-config";

// fully qualified XP content-type name:
export const PERSON_CONTENTTYPE_NAME = `${APP_NAME}:person`;

const Person = ({content}) => {
    const {displayName, data={}, parent={}} = content;
    const {bio, photos} = data;
    const {_path} = parent;

    return (
        <>
            <div>
                <h2>{displayName}</h2>

                <p>{bio}</p>

                {
                    photos.map((photo, i) => (
                        <img key={i}
                             src={photo.imageUrl}
                             title={
                                 (photo.attachments || [])[0].name ||
                                 displayName
                             }
                             width="200"
                        />
                    ))
                }
            </div>

            <p><a href={_path}>Back to Persons</a></p>
        </>
    )
}

export default Person;
