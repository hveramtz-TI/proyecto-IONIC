import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Finalizado</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* Aquí puedes agregar tus tarjetas o listas de tareas */}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;