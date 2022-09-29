<template>
<ion-page>
  <ion-header>
    <ion-toolbar>
      <ion-title>My App</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-item>
      <ion-input v-model="text" />
    </ion-item>
    <ion-item>
      <ion-label>Hello {{ text }} World!</ion-label>
    </ion-item>
  </ion-content>
</ion-page>
</template>
<script>
import { ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonLabel } from '@ionic/vue';

export default {
  name: 'PageIndex',
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonLabel },
  setup() {
    const text = ref('Mobile App');
    return { text };
  },
}
</script>
