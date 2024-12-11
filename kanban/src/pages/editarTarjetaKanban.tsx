import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';

const EditarTarjetaKanban: React.FC = () => {
  const { taskId } = useParams<{ taskId: string }>();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [priority, setPriority] = useState('');

  const handleSaveClick = () => {
    // Aquí puedes manejar la lógica para guardar los cambios
    console.log('Guardar cambios:', { taskId, title, description, assignedTo, priority });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Editar Tarea {taskId}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonLabel position="stacked">Título</IonLabel>
          <IonInput value={title} onIonChange={e => setTitle(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Descripción</IonLabel>
          <IonInput value={description} onIonChange={e => setDescription(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Asignado a</IonLabel>
          <IonInput value={assignedTo} onIonChange={e => setAssignedTo(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Prioridad</IonLabel>
          <IonInput value={priority} onIonChange={e => setPriority(e.detail.value!)} />
        </IonItem>
        <IonButton expand="full" onClick={handleSaveClick}>Guardar</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default EditarTarjetaKanban;