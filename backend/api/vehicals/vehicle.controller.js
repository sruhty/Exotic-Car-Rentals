import { Vehicle } from "./vehicle.model"
const { ObjectID } = require("mongodb");

const redis = require("redis");
const client = redis.createClient({ host: process.env.REDIS_HOST, port: process.env.REDIS_PORT });

export const getCarList = async (req, res) => {
    client.set("mykey", "myvalue", (req, res) => {
        console.log("cache setting");
      });
      
      client.get("mykey", (req, res) => {
        console.log("cache getting");
      });
    try {
        let  getCategories = []
        const data = req.body;

        if(data.city && data.seat){

            getCategories = await Vehicle.find({city:data.city,status:"available",seat: { $lte: data.seat }});
        }
        else if(!data.city && !data.seat){
            console.log(data)
            getCategories = await Vehicle.find({status:"available"});
        }
        else if(!data.seat){

            getCategories = await Vehicle.find({city:data.city,status:"available"});
        }
        else if(!data.city){

            getCategories = await Vehicle.find({seat: { $gte: data.seat },status:"available"});
        }
        res.status(200).send({done: true, data: getCategories})
    } catch (err) {
        console.log(err);
        res.status(422).send({done: false, message: err.message, error: "Error in get vehicle!"})
    }
};

export const getCarDetail = async (req, res) => {
    try {
        const data = req.body;

        if(data.id){
            const result = await Vehicle.find({_id:data.id});
            return res.status(200).send({done: true, data: result})
        }else{
            const result  = await Vehicle.aggregate([
                {
                    $match: { userId: ObjectID(data.userId) }
                },
                {
                    $project: {
                        updatedAt: 0,
                        createdAt: 0 ,
                        __v:0
                    }
                }
            ]);
            return res.status(200).send({done: true, data: result})
        }
    } catch (err) {
        console.log(err);
        res.status(422).send({done: false, message: err.message, error: "Error in get vehicle!"})
    }
};

export const registerCar = async (req, res) => {
    try {
        const data = req.body;

        const create = await  Vehicle.create(data);
        res.status(200).send({done: true, data: create })
    } catch (err) {
        console.log(err);
        res.status(422).send({done: false, message: err.message, error: "Error in create users!"})
    }
};

export const updateData = async (req, res) => {
    try {
        const data = req.body;
        const result = await Vehicle.findByIdAndUpdate(req.params.Vehicle_id,{
            company: data.company,
            color: data.color,
            fuelType: data.fuelType,
            model: data.model,
            seat: data.seat,
            rentValue: data.rentValue,
            photos: data.photos,
            vehicleNumber: data.vehicleNumber,
            facilities: data.facilities,
            description: data.description,
            year: data.year,
            status: data.status,
            country: data.country,
            state: data.state,
            city: data.city,
            bagSpace: data.bagSpace,
            pincode: data.pincode,
            transmission: data.transmission
        });
        res.status(200).send(result);
    } catch (err) {
        console.log("Error", err);
        res.status(422).send({error: "Error in getting user time info"});
    }
};

export const updateStatus = async (req, res) => {
    try {
        const data = req.body;
        const result = await Vehicle.findByIdAndUpdate(req.params.Vehicle_id,{
            status: data.status,
        });
        res.status(200).send(result);
    } catch (err) {
        console.log("Error", err);
        res.status(422).send({error: "Error in getting user time info"});
    }
};

export const deleteData = async (req, res) => {
    try {

        await Vehicle.deleteOne({_id : req.params.car_id })
        res.status(200).send("success");
    } catch (err) {
        res.status(422).send({ error: "Error in delete department details" });
    }
}
