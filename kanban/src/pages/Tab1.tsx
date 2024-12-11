import React from 'react';
import { useHistory } from 'react-router-dom';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon } from '@ionic/react';
import { createOutline } from 'ionicons/icons';
import './Tab1.css'; // Importa el archivo CSS

const Tab1: React.FC = () => {
  const history = useHistory();

  const handleEditClick = (taskId: string) => {
    // Cambia de pestaña a la ruta de edición
    history.push(`/edit/${taskId}`);
  };

  const getCardColor = (priority: string) => {
    switch (priority) {
      case 'alta':
        return 'danger'; // rojo
      case 'media':
        return 'warning'; // amarillo
      case 'baja':
        return 'primary'; // azul
      default:
        return 'light'; // color por defecto
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>En espera</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard color={getCardColor('alta')}>
          <IonCardHeader>
            <IonCardTitle>Tarea 1</IonCardTitle>
            <IonCardSubtitle>Asignado a: Juan Pérez</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Descripción de la tarea 1.
            <p>Fecha de creación: 01/01/2023</p>
            <p>Prioridad: Alta</p>
            <IonButton fill="clear" className="edit-button" onClick={() => handleEditClick('1')}>
              <IonIcon slot="icon-only" icon={createOutline} />
            </IonButton>
          </IonCardContent>
        </IonCard>
        <IonCard color={getCardColor('media')}>
          <IonCardHeader>
            <IonCardTitle>Tarea 2</IonCardTitle>
            <IonCardSubtitle>Asignado a: María López</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Descripción de la tarea 2.
            <p>Fecha de creación: 02/01/2023</p>
            <p>Prioridad: Media</p>
            <IonButton fill="clear" className="edit-button" onClick={() => handleEditClick('2')}>
              <IonIcon slot="icon-only" icon={createOutline} />
            </IonButton>
          </IonCardContent>
        </IonCard>
        <IonCard color={getCardColor('baja')}>
          <IonCardHeader>
            <IonCardTitle>Tarea 3</IonCardTitle>
            <IonCardSubtitle>Asignado a: Carlos García</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Descripción de la tarea 3.
            <p>Fecha de creación: 03/01/2023</p>
            <p>Prioridad: Baja</p>
            <IonButton fill="clear" className="edit-button" onClick={() => handleEditClick('3')}>
              <IonIcon slot="icon-only" icon={createOutline} />
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;