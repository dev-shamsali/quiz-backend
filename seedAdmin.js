import 'dotenv/config';
import mongoose from 'mongoose';
import User from './models/User.js';

async function seedAdmin() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');

  const email = 'shams@gmail.com';
  const password = 'shams@123';
  const name = 'Shams Admin';

  let admin = await User.findOne({ email });
  if (admin) {
    admin.password = password;
    admin.role = 'admin';
    admin.name = name;
    await admin.save();
    console.log('Admin updated:', email);
  } else {
    await User.create({ name, email, password, role: 'admin' });
    console.log('Admin created:', email);
  }

  await mongoose.disconnect();
  process.exit(0);
}

seedAdmin().catch((err) => { console.error(err); process.exit(1); });

