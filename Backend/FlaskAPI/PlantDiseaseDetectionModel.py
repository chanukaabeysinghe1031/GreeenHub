import tensorflow as tf
import pathlib

train_data_dir = "/Users/chanukaabeysinghe/Documents/Projects/GoviMithura/GreeenHub/Backend/FlaskAPI/Dataset/train"
train_data_dir = pathlib.Path(train_data_dir)

vali_data_dir = "/Users/chanukaabeysinghe/Documents/Projects/GoviMithura/GreeenHub/Backend/FlaskAPI/Dataset/valid"
vali_data_dir = pathlib.Path(train_data_dir)
image_count = len(list(train_data_dir.glob('*/*.jpg')))
Angry = list(train_data_dir.glob('Angry/*'))

batch_size = 32
img_height = 224
img_width = 224

train_ds = tf.keras.preprocessing.image_dataset_from_directory(
  train_data_dir,
  validation_split=0.2,
  subset="training",
  seed=123,
  image_size=(img_height, img_width),
  batch_size=batch_size)

vali_ds = tf.keras.preprocessing.image_dataset_from_directory(
  vali_data_dir,
  validation_split=0.2,
  subset="training",
  seed=123,
  image_size=(img_height, img_width),
  batch_size=batch_size)

class_names = train_ds.class_names
print(len(class_names))

for image_batch, labels_batch in train_ds:
  print(image_batch.shape)
  print(labels_batch.shape)
  break

normalization_layer = tf.keras.layers.experimental.preprocessing.Rescaling(1. / 255)

AUTOTUNE = tf.data.AUTOTUNE

train_ds = train_ds.cache().prefetch(buffer_size=AUTOTUNE)
vali_ds = vali_ds.cache().prefetch(buffer_size=AUTOTUNE)

num_classes = 10

model = tf.keras.Sequential([
  tf.keras.layers.experimental.preprocessing.Rescaling(1./255),
  tf.keras.layers.Conv2D(8, 3, activation='relu'),
  tf.keras.layers.MaxPooling2D(),
  tf.keras.layers.Conv2D(8, 3, activation='relu'),
  tf.keras.layers.MaxPooling2D(),
  tf.keras.layers.Conv2D(8, 3, activation='relu'),
  tf.keras.layers.MaxPooling2D(),
  tf.keras.layers.Flatten(),
  tf.keras.layers.Dense(8, activation='relu'),
  tf.keras.layers.Dense(num_classes)
])

model.compile(
  optimizer='adam',
  loss=tf.losses.SparseCategoricalCrossentropy(from_logits=True),
  metrics=['accuracy'])

model.fit(
  train_ds,
  validation_data=vali_ds,
  epochs=40
)

model.save('plant_disease_ditection_model_v3.h5')

# version 1 accuracy 0.2769   val_accuracy 0.2870   loss 1.8259
# version 2 accuracy 0.7826   val_accuracy 0.7998  loss 0.5798 val_loss: 0.5480