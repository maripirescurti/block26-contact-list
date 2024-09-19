import { useState } from "react"
import { useEffect } from "react"

export default function SelectedContact({ selectedContactId, setSelectedContactId}) {
  
  const [contact, setContact] = useState(null)
  
  useEffect(() => {
    const fetchContact = async () => {
      if (selectedContactId) {
        try {
          const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
          const data = await response.json();
          setContact(data);
        } catch (error) {
          console.error("Error fetching contact: ", error);
        }
      }
    };

    fetchContact();
  }, [selectedContactId]

)

  return (
    <div>
      <h2>Selected Contact</h2>
      <p>Contact ID: {selectedContactId}</p>
      <button onClick={() => setSelectedContactId(null)}>Deselect Contact</button>
    </div>
  )
}