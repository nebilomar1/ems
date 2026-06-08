import express from "express";
import con from "../utils/db.js";
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import multer from "multer";
import path from "path";





const router = express.Router();

router.post("/adminlogin", (req, res) => {
  const sql = "SELECT * from admin where email = ? and password = ?";
  con.query(sql, [req.body.email, req.body.password], (err, result) => {
    if (err) return res.json({ loginStatus: false, Error: "Query error" });
    if (result.length > 0) {
      const email = result[0].email;
      const token = Jwt.sign(
        { role: "admin", email: email },
        "jwt_secret_key",
        { expiresIn: "1d" }
      );
      res.cookie("token", token);
      return res.json({ loginStatus: true });
    } else {
      return res.json({ loginStatus: false, Error: "Wrong email or password" });
    }
  });
});

router.get("/categorys", (req, res) => {
  const sql = "SELECT * FROM department";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
});
router.get("/dashboards", (req, res) => {
  const sql = "SELECT * FROM vacancy";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
});

//super
router.get("/categorys", (req, res) => {
  const sql = "SELECT * FROM department";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
});

// vacancy get in hr manager
router.get("/hero", (req, res) => {
  const sql = "SELECT * FROM vacancy";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
});
// n employee in hr 
router.get("/navbare", (req, res) => {
  const sql = "SELECT * FROM nemployee";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
});

router.post("/add_category", (req, res) => {
  const { did, department } = req.body; // Extract 'did' and 'department' from req.body

  const sql = "INSERT INTO department (did, department) VALUES (?, ?)";
  
  con.query(sql, [did, department], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({ error: "Error inserting data into the database" });
    }

    console.log("Data inserted successfully");
    return res.json({ message: "Data inserted successfully" });
  });
});
// new employee requst
router.post("/managacc", (req, res) => {
  const { name, phone,address, info,gender,date,cv } = req.body; 

  const sql = "INSERT INTO nemployee (name, phone,address, info,gender,date,cv ) VALUES (?, ?, ?, ?, ?, ?, ?)";
  
  con.query(sql, [name, phone,address, info,gender,date,cv ], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({ error: "Error inserting data into the database" });
    }

    console.log("Data inserted successfully");
    return res.json({ message: "Data inserted successfully" });
  });
});

//vacancy
router.post("/vacancy", (req, res) => {
  const { head, vacancy,register } = req.body; // Extract 'did' and 'department' from req.body

  const sql = "INSERT INTO vacancy (head, vacancy,register) VALUES (?, ?, ?)";
  
  con.query(sql, [head,vacancy, register], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({ error: "Error inserting data into the database" });
    }

    console.log("Data inserted successfully");
    return res.json({ message: "Data inserted successfully" });
  });
});






//super


// super add role category


// super role category
router.get("/role_category", (req, res) => {
  const sql = "SELECT * FROM rolecategory";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
});

//image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Public/Images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});
//end image upload
  



//super
router.post('/add_rolee', async (req, res) => {
  const { id, user, type, email, phone, address, photo, gender, date, pwd } = req.body;

  // Perform validation here if needed

  try {
      const hash = await bcrypt.hash(pwd, 10);
      const sql = `INSERT INTO account (id, user, type, email, phone, address, photo, gender, date, pwd) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      const values = [id, user, type, email, phone, address, photo, gender, date, hash];

      con.query(sql, values, (err, result) => {
          if (err) {
              if (err.code === 'ER_DUP_ENTRY') {
                  console.error('Error: Duplicate entry for primary key');
                  return res.status(400).json({ error: 'Duplicate entry for primary key' });
              } else {
                  console.error('Error in inserting data:', err);
                  return res.status(500).json({ error: 'Error in creating the account' });
              }
          }

          console.log('Data inserted successfully');
          const message = 'Data inserted successfully';
          return res.json({ message: message });
      });
  } catch (error) {
      console.error('Error in hashing password:', error);
      return res.status(500).json({ error: 'Error in creating the account' });
  }
});


router.post("/add_employeea", upload.single("image"), (req, res) => {
  const sql = `INSERT INTO employeee 
    (name,email, password, address, salary, sex, image, category_id) 
    VALUES (?)`;
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    const values = [
      req.body.name,
      req.body.email,
      hash,
      req.body.address,
      req.body.salary,
      req.body.sex,
      req.file.filename,
      req.body.category_id,
    ];
    con.query(sql, [values], (err, result) => {
      if (err) return res.json({ Status: false, Error: "Query Error" });
      return res.json({ Status: true });
    });
  });
});


// employee register from
router.post('/add_employee', async (req, res) => {
  const { id, user, email, phone, salary, address, gender, cv, date, did } = req.body;

  // Perform validation here if needed
  // Make sure to have your regex patterns defined for validation

  try {
      const sql = `INSERT INTO employee (id, user, email, phone, salary, address, gender, cv, date, did) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?)`;
      const values = [id, user, email, phone, salary, address, gender, cv, date, did];

      // Assuming con is your database connection
      con.query(sql, values, (err, result) => {
          if (err) {
              if (err.code === 'ER_DUP_ENTRY') {
                  console.error('Error: Duplicate entry for primary key');
                  return res.status(400).json({ error: 'Duplicate entry for primary key' });
              } else {
                  console.error('Error in inserting data:', err);
                  return res.status(500).json({ error: 'Error in creating the employee' });
              }
          }

          console.log('Data inserted successfully');
          return res.json({ message: 'Data inserted successfully' });
      });
  } catch (error) {
      console.error('Error in inserting data:', error);
      return res.status(500).json({ error: 'Error in creating the employee' });
  }
});


router.get("/employeee", (req, res) => {
  const sql = "SELECT * FROM employeee";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
});

//super employee
router.get("/employee", (req, res) => {
  const sql = "SELECT * FROM employeee";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
});

//super role
router.get("/role", (req, res) => {
  const sql = "SELECT * FROM role";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/employeee/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM employeee WHERE id = ? ";
  con.query(sql, [id], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
});

router.put("/edit_employeee/:id", (req, res) => {
  const id = req.params.id;
  const sql = ` UPDATE employeee 
            set name = ?, email = ?, salary = ?,  address = ? , sex= ? , category_id = ? 
            Where id = ?`;
  const values = [
    req.body.name,
    req.body.email,
    req.body.salary,
    req.body.address,
    req.body.sex,
    req.body.category_id
  ];
  con.query(sql, [...values, id], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});


router.get("/employee/:id", (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM employeee WHERE id = ? ";
    con.query(sql, [id], (err, result) => {
      if (err) return res.json({ Status: false, Error: "Query Error" });
      return res.json({ Status: true, Result: result });
    });
  });
  
  router.put("/edit_employee/:id", (req, res) => {
    const id = req.params.id;
    const sql = ` UPDATE employeee 
              set name = ?, email = ?, salary = ?,  address = ? , sex=?, category_id = ? 
              Where id = ?`;
    const values = [
      req.body.name,
      req.body.email,
      req.body.salary,
      req.body.address,
      req.body.sex,
      req.body.category_id,
    ];
    con.query(sql, [...values, id], (err, result) => {
      if (err) return res.json({ Status: false, Error: "Query Error" + err });
      return res.json({ Status: true, Result: result });
    });
  });

  


  router.get("/role/:id", (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM role WHERE id = ? ";
    con.query(sql, [id], (err, result) => {
      if (err) return res.json({ Status: false, Error: "Query Error" });
      return res.json({ Status: true, Result: result });
    });
  });
  
  router.put("/edit_role/:id", (req, res) => {
    const id = req.params.id;
    const sql = ` UPDATE role
              set name = ?, email = ?, role = ? sex = ?  
              Where id = ?`;
    const values = [
      req.body.name,
      req.body.email,
      req.body.role,
     
     
    ];
    con.query(sql, [...values, id], (err, result) => {
      if (err) return res.json({ Status: false, Error: "Query Error" + err });
      return res.json({ Status: true, Result: result });
    });
  });
  
export { router as adminRouter };
