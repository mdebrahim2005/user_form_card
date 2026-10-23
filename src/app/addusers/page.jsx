"use client";

import { useState } from "react";
import {
  Button,
  Input,
  Label,
  Modal,
  TextField,
} from "@heroui/react";
import { Plus, User, ChevronDown } from "lucide-react";

export default function AddUsers() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const newUser = {
      ...data,
      createdAt: new Date().toISOString(),
    };

    console.log("New User Payload:", newUser);
    alert(`User Created Successfully:\n${JSON.stringify(newUser, null, 2)}`);

    // ফর্ম স্বয়ংক্রিয়ভাবে বন্ধ হয়ে যাবে
    setIsOpen(false);
  };

  return (
    <div>
      {/* Add User বাটন */}
      <Button onPress={() => setIsOpen(true)} variant="secondary">
        <Plus size={18} /> Add User
      </Button>

      {/* মডাল */}
      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Backdrop className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50">
          <Modal.Container placement="center" className="flex items-center justify-center p-4">
            <Modal.Dialog className="w-full max-w-md rounded-2xl bg-[#121214] p-6 text-zinc-100 shadow-2xl border border-zinc-800 relative z-50">
              <Modal.CloseTrigger className="absolute right-4 top-4 text-zinc-400 hover:text-white" />

              {/* হেডার */}
              <Modal.Header className="mb-5">
                <Modal.Heading className="flex items-center gap-3 text-lg font-semibold text-white">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                    <User size={18} />
                  </span>
                  New User
                </Modal.Heading>
              </Modal.Header>

              {/* ফর্ম */}
              <Modal.Body className="p-0">
                <form
                  id="create-user-form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                >
                  {/* Full Name */}
                  <TextField className="w-full flex flex-col gap-1.5" name="name" type="text" isRequired>
                    <Label className="text-sm font-medium text-zinc-300">Full Name</Label>
                    <Input
                      placeholder="Enter your name"
                      className="w-full h-11 rounded-xl border border-zinc-700 bg-zinc-900/80 px-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500"
                    />
                  </TextField>

                  {/* Email */}
                  <TextField className="w-full flex flex-col gap-1.5" name="email" type="email" isRequired>
                    <Label className="text-sm font-medium text-zinc-300">Email</Label>
                    <Input
                      placeholder="Enter your email"
                      className="w-full h-11 rounded-xl border border-zinc-700 bg-zinc-900/80 px-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500"
                    />
                  </TextField>

                  {/* Phone */}
                  <TextField className="w-full flex flex-col gap-1.5" name="phone" type="tel" isRequired>
                    <Label className="text-sm font-medium text-zinc-300">Phone</Label>
                    <Input
                      placeholder="01312345678"
                      className="w-full h-11 rounded-xl border border-zinc-700 bg-zinc-900/80 px-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500"
                    />
                  </TextField>

                  {/* Role Dropdown */}
                  <div className="w-full flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-zinc-300">
                      Role <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="role"
                        defaultValue="user"
                        className="w-full h-11 rounded-xl border border-zinc-700 bg-zinc-900/80 px-3.5 pr-10 text-sm text-white appearance-none focus:outline-none focus:border-blue-500 cursor-pointer"
                      >
                        <option value="user" className="bg-zinc-900 text-white">User</option>
                        <option value="admin" className="bg-zinc-900 text-white">Admin</option>
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Status Dropdown */}
                  <div className="w-full flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-zinc-300">
                      Status <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="status"
                        defaultValue="active"
                        className="w-full h-11 rounded-xl border border-zinc-700 bg-zinc-900/80 px-3.5 pr-10 text-sm text-white appearance-none focus:outline-none focus:border-blue-500 cursor-pointer"
                      >
                        <option value="active" className="bg-zinc-900 text-white">Active</option>
                        <option value="pending" className="bg-zinc-900 text-white">Pending</option>
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
                      />
                    </div>
                  </div>
                </form>
              </Modal.Body>

              {/* ফুটার বাটন */}
              <Modal.Footer className="mt-6 flex justify-end gap-3 border-t border-zinc-800 pt-4">
                <Button
                  slot="close"
                  variant="secondary"
                  className="px-5 rounded-xl"
                  onPress={() => setIsOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  form="create-user-form"
                  type="submit"
                  color="primary"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-5 rounded-xl font-medium"
                >
                  Create User
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
}