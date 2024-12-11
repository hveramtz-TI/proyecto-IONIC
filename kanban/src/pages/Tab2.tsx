import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>En proceso</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* Aquí puedes agregar tus tarjetas o listas de tareas */}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;