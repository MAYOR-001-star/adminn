import Image from "next/image";
import styles from "../../../ui/dashboard/products/singleProduct/singleProduct.module.css"
import {fetchUser} from "@/app/lib/data";
import {updateUser} from "@/app/lib/actions";

const SingleUserPage = async ({params}) => {
    const {id} = params;
    const user = fetchUser(id)
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noavatar.png" alt="" fill />
                </div>
                {user?.username}
            </div>

            <div className={styles.formContainer}>
                <form action={updateUser} className={styles.form}>
                    <input type="hidden" name="id" value={user?.id}/>

                    <label>Username</label>
                    <input type="text" name="username" defaultValue={user?.username}/>

                    <label>Email</label>
                    <input type="email" name="email" defaultValue={user?.email}/>

                    <label>Password</label>
                    <input type="password" name="password"/>

                    <label>Phone</label>
                    <input type="text" name="phone" defaultValue={user?.phone}/>

                    <label>Address</label>
                    <textarea name="address" defaultValue={user?.address}/>

                    <label>Is Admin?</label>
                    <select name="isAdmin" defaultValue={user?.isAdmin?.toString()}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>

                    <label>Is Active?</label>
                    <select name="isActive" defaultValue={user?.isActive?.toString()}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>

                    <button>Update</button>
                </form>
            </div>
        </div>
    );
};

export default SingleUserPage;