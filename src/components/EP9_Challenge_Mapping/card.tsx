import React from 'react'

interface Emojipedia {
  id?: string;
  emoji: string;
  name: string;
  meaning: string;
}

function card(emojipedia: Emojipedia) {
  return (
    <div>
      <dl className="dictionary">
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {emojipedia.emoji}
            </span>
            <span>{emojipedia.name}</span>
          </dt>
          <dd>
            {emojipedia.meaning}
          </dd>
        </div>
      </dl>
    </div>
  )
}

export default card