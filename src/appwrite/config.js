import conf from "../Conf/conf";
import {Client, ID, Databases, Storage, Query} from "appwrite"

export class Service{
      client = new Client();
      Databases;
      bucket;

      constructor(){
            this.client
                       .setEndpoint(conf.appwriteUrl)
                       .setProject(conf.appwriteProjectId)
            this.databases = new Databases(this.client)
            this.bucket = new Storage(this.client)
       }

       async createPost({title,slug,content,featuredImage,status,userid}){
            try {
                  return await this.Databases.createDocument(
                        conf.appwriteDatabaseId,
                        conf.appwriteCollectionId,
                        slug,
                        {
                              title,
                              content,
                              featuredImage,
                              status,
                              userid,
                        }

                  )
            } catch (error) {
                  console.log("Appwrite serive :: createPost :: error", error)
            }
       }

       async updatePost({title,content,status,featuredImage}){
            try {
                  return await this.databases.updateDocument(
                        conf.appwriteDatabaseId,
                        conf.appwriteCollectionId,
                        slug,
                        {
                              title,
                              content,
                              featuredImage,
                              status,
                        }
                  )
            } catch (error) {
                  console.log("Appwrite serive :: updatePost :: error", error)
            }
       }

       async deletePost(slug){
            try {
                   await this.databases.deleteDocument(
                        conf.appwriteDatabaseId,
                        conf.appwriteCollectionId,
                        slug,
                  )
                  return true
            } catch (error) {
                  console.log("Appwrite serive :: deletePost :: error", error)
                  return false
            }
       }

       async getPost(slug){
            try {
                  return await this.databases.getDocument(
                        conf.appwriteDatabaseId,
                        conf.appwriteCollectionId,
                        slug,

                  )
            } catch (error) {
                  console.log("Appwrite serive :: getPost :: error", error)
                  return false
            }
       }

       async getPosts(queries = [Query.equal("status", "active")]){
            try {
                  return await this.databases.listDocuments(
                        conf.appwriteDatabaseId,
                        conf.appwriteCollectionId,
                        queries,
                  )
            } catch (error) {
                  console.log("Appwrite serive :: getPosts :: error", error)
                  return false
            }
       }

      //  file Uplaod service 

      async uploadFile(file){
            try {
                  return await this.bucket.createFile(
                        conf.appwriteBucketId,
                        file,
                        ID.unique(),
                  )
            } catch (error) {
                  console.log("Appwrite serive :: uploadFile :: error", error) 
                  return false   
            }
      }

      async deleteFile(fileId){
            try {
                   await this.bucket.deleteFile(
                        conf.appwriteBucketId,
                        fileId
                  )
                  return true
            } catch (error) {
                  console.log("Appwrite serive :: deleteFile :: error", error)
                  return false
            }
      }

      async getFilePreview(fileId){
            try {
                  return await this.bucket.getFilePreview(
                        conf.appwriteBucketId,
                        fileId
                  )
            } catch (error) {
                  console.log("Appwrite serive :: getFilePreview :: error", error)
                  
            }
      }

}

const service = new Service()

export default service;