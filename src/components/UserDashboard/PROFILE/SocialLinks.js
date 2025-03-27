import React, { useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from "firebase/firestore";
import { DB, auth } from "../../firebase-config";
import { FaEdit, FaSave, FaTimes, FaPlus } from "react-icons/fa";

const SocialLinks = ({ user }) => {
  const [links, setLinks] = useState([]);
  const [editing, setEditing] = useState(false);
  const [newLink, setNewLink] = useState({ platform: '', url: '' });

  useEffect(() => {
    const fetchLinks = async () => {
      const userRef = doc(DB, 'users', auth.currentUser.uid);
      const docSnap = await getDoc(userRef);
      if (docSnap.exists() && docSnap.data().links) {
        setLinks(docSnap.data().links);
      }
    };
    fetchLinks();
  }, []);

  const handleSave = async () => {
    try {
      await setDoc(doc(DB, 'users', auth.currentUser.uid), {
        links: links
      }, { merge: true });
      setEditing(false);
    } catch (error) {
      console.error("Error saving links:", error);
    }
  };

  const addLink = () => {
    if (newLink.platform && newLink.url) {
      setLinks([...links, newLink]);
      setNewLink({ platform: '', url: '' });
    }
  };

  return (
    <div className="links-container" style={{ padding: '20px', color: 'white' }}>
      {/* Enhanced Button Section - Only This Part Changed */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <h2>MY LINKS</h2>
        {editing ? (
          <div style={{ display: 'flex', gap: '10px' }}>
            <button 
              onClick={handleSave}
              style={{
                background: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                padding: '8px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              <FaSave /> Save
            </button>
            <button 
              onClick={() => setEditing(false)}
              style={{
                background: '#f44336',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                padding: '8px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              <FaTimes /> Cancel
            </button>
          </div>
        ) : (
          <button 
            onClick={() => setEditing(true)}
            style={{
              background: '#4a6dff',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              padding: '8px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            <FaEdit /> Edit Links
          </button>
        )}
      </div>
      {/* End of Enhanced Button Section */}

      {editing ? (
        <div className="add-link-form" style={{ margin: '20px 0' }}>
          <input
            type="text"
            placeholder="Platform (e.g. Twitter)"
            value={newLink.platform}
            onChange={(e) => setNewLink({...newLink, platform: e.target.value})}
            style={{ marginRight: '10px', padding: '8px' }}
          />
          <input
            type="url"
            placeholder="URL"
            value={newLink.url}
            onChange={(e) => setNewLink({...newLink, url: e.target.value})}
            style={{ marginRight: '10px', padding: '8px', width: '300px' }}
          />
          <button onClick={addLink}>
            <FaPlus /> Add
          </button>
        </div>
      ) : null}

      <div className="links-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '15px',
        marginTop: '20px'
      }}>
        {links.map((link, index) => (
          <div key={index} className="link-card" style={{
            backgroundColor: '#28303f',
            padding: '15px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center'
          }}>
            <div style={{ flex: 1 }}>
              <h4 style={{ margin: '0 0 5px 0' }}>{link.platform}</h4>
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#4a90e2', wordBreak: 'break-all' }}
              >
                {link.url}
              </a>
            </div>
            {editing && (
              <button 
                onClick={() => setLinks(links.filter((_, i) => i !== index))}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: '#ff6b6b',
                  cursor: 'pointer'
                }}
              >
                ×
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;