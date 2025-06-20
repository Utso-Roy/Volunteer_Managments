import React from 'react';

const AddVolunteer = () => {
    return (
        <div className="min-h-screen flex items-center justify-center" >
            <form className="space-y-4 w-full max-w-xl p-6 shadow-md bg-white rounded-xl">
                <input type="text" name="thumbnail" placeholder="Thumbnail URL" className="input input-bordered w-full" required />

                <input type="text" name="title" placeholder="Post Title" className="input input-bordered w-full" required />

                <textarea name="description" placeholder="Description" className="textarea textarea-bordered w-full" required></textarea>

                <select name="category" className="select select-bordered w-full" required>
                    <option value="">Select Category</option>
                    <option>healthcare</option>
                    <option>education</option>
                    <option>social service</option>
                    <option>animal welfare</option>
                </select>

                <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" required />

                <input type="number" name="volunteers" placeholder="Number of Volunteers Needed" className="input input-bordered w-full" required />

                <div className="w-full">
                    <label className="block mb-1 font-medium text-gray-700">Deadline</label>
                    <input type="date" name="deadline" className="input input-bordered w-full" required />
                </div>

                <input type="text" name="organizerName" placeholder="Organizer Name" readOnly className="input input-bordered w-full" />

                <input type="email" name="organizerEmail" placeholder="Organizer Email" readOnly className="input input-bordered w-full" />

                <button type="submit" className="btn bg-[#0267af] text-white  hover:bg-[#0267affe] w-full">Add Post</button>
            </form>
        </div>
    );
};

export default AddVolunteer;
