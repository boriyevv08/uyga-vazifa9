import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

let arr = []

const Homelist = () => {

    const [category, setCetegory] = useState([])
    const [value, setValue] = useState({ category: 0, amount: 5, difficulty: 0, type: 0 })

    useEffect(() => {
        async function fetchData() {
            let { data } = await axios.get('https://opentdb.com/api_category.php')
            setCetegory(data.trivia_categories)
        }
        fetchData();

    }, []);



    for (let i = 0; i <= 50; i++) {

        arr.push(i)

    }

    // console.log(arr)




    return (
        <div className='container-xxl'>
            <div className="wrapper border mt-8 d-flex p-2">
                <div className="logo"><img src="/mind.525a3ae0.svg" className='mx-4' alt="" width={200} /></div>
                <div className="my-3 ml-6  quiz w-100">
                    <h1 className='fs-2 mb-4'>The ultimate trivia quiz</h1>
                    <hr />
                    <select onChange={(e) => setValue({ ...value, category: e.target.value })} className="form-select my-3 w-90" aria-label="Default select example">
                        <option className='optText'>Any Category</option>
                        <option disabled className='optText'>SELECT FO CATEGORY</option>
                        <option disabled className='any-category' >Any Category</option>
                        {
                            category.map(item => {
                                return (
                                    <option value={item.id} className='optText'>{item.name}</option>
                                )
                            })
                        }
                    </select>
                    <select onChange={(e) => setValue({ ...value, amount: e.target.value })} className="form-select my-3 w-90" aria-label="Default select example">
                        <option className='optText'>5</option>
                        <option disabled className='optText'>SLECeT NO.OF QUESTION</option>
                        <option value="1" className='any-category' ></option>

                        {
                            arr.map((item, i) => {

                                // console.log(item)

                                

                                return <option key={i} value={item} className='optText'>{item}</option>
                                // console.log(item, i)
                                


                            })
                        }

                        {/* <option value="2" className='optText'>2</option>
                        <option value="4" className='optText'>4</option>
                        <option value="5" className='optText'>5</option>
                        <option value="6" className='optText'>6</option>
                        <option value="7" className='optText'>8</option>
                        <option value="7" className='optText'>9</option>
                        <option value="7" className='optText'>10</option>
                        <option value="7" className='optText'>11</option>
                        <option value="7" className='optText'>12</option>
                        <option value="7" className='optText'>13</option>
                        <option value="7" className='optText'>14</option>
                        <option value="7" className='optText'>15</option>
                        <option value="7" className='optText'>16</option>
                        <option value="7" className='optText'>17</option>
                        <option value="7" className='optText'>18</option>
                        <option value="7" className='optText'>19</option>
                        <option value="7" className='optText'>20</option>
                        <option value="7" className='optText'>21</option>
                        <option value="7" className='optText'>22</option>
                        <option value="7" className='optText'>22</option>
                        <option value="7" className='optText'>7</option>
                        <option value="7" className='optText'>7</option>
                        <option value="7" className='optText'>7</option>
                        <option value="7" className='optText'>7</option>
                        <option value="7" className='optText'>7</option>
                        <option value="7" className='optText'>7</option>
                        <option value="7" className='optText'>7</option>
                        <option value="7" className='optText'>7</option>
                        <option value="7" className='optText'>7</option>
                        <option value="7" className='optText'>7</option>
                        <option value="7" className='optText'>7</option>
                        <option value="7" className='optText'>7</option>
                        <option value="7" className='optText'>7</option>
                        <option value="7" className='optText'>7</option>
                        <option value="7" className='optText'>7</option>
                        <option value="7" className='optText'>7</option>
                        <option value="7" className='optText'>7</option>
                        <option value="7" className='optText'>7</option> */}
                    </select>
                    <select onChange={(e) => setValue({ ...value, difficulty: e.target.value })} className="form-select my-3 w-90" aria-label="Default select example">
                        <option className='optText'>Any Difficulty</option>
                        <option disabled className='optText'>SELECT DIFFICULTY LEVEL</option>
                        <option disabled value="0" className='any-category' >Any Difficulty</option>
                        <option value="easy" className='optText'>Easy</option>
                        <option value="medium" className='optText'>Medium</option>
                        <option value="hard" className='optText'>Hard</option>
                    </select>
                    <select onChange={(e) => setValue({ ...value, type: e.target.value })} className="form-select my-3 w-100" aria-label="Default select example">
                        <option className='optText'>Any Type</option>
                        <option disabled className='optText'>SELECT QUESTION TYPE</option>
                        <option disabled value="0" className='any-category' >Any Type</option>
                        <option value="multiple" className='optText'>Multiple Choice</option>
                        <option value="boolean" className='optText'>True \ False</option>
                    </select>
                    <div className="time d-flex gap-4">
                        <select className="form-select my-3 w-25" aria-label="Default select example">
                            <option className='optText'>0</option>
                            <option disabled className='optText'>SLECeT HOURS</option>
                            <option value="1" className='any-category' >1</option>
                            <option value="2" className='optText'>2</option>
                            <option value="3" className='optText'>3</option>
                            <option value="4" className='optText'>4</option>
                            <option value="5" className='optText'>5</option>
                            <option value="6" className='optText'>6</option>
                            <option value="7" className='optText'>7</option>
                            <option value="8" className='optText'>8</option>
                            <option value="9" className='optText'>9</option>
                            <option value="10" className='optText'>10</option>
                        </select>
                        <select className="form-select my-3 w-25" aria-label="Default select example">
                            <option className='optText'>10</option>
                            <option disabled className='optText'>SLECeT MINUTES</option>
                            <option value="1" className='any-category' >10</option>
                            <option value="2" className='optText'>20</option>
                            <option value="3" className='optText'>30</option>
                            <option value="4" className='optText'>40</option>
                            <option value="5" className='optText'>50</option>
                            <option value="6" className='optText'>60</option>
                        </select>
                        <select className="form-select my-3 w-25" aria-label="Default select example">
                            <option className='optText'>10</option>
                            <option disabled className='optText'>SLECT SECONDS</option>
                            <option value="1" className='any-category' >10</option>
                            <option value="2" className='optText'>20</option>
                            <option value="3" className='optText'>30</option>
                            <option value="4" className='optText'>40</option>
                            <option value="5" className='optText'>50</option>
                            <option value="6" className='optText'>60</option>
                        </select>
                    </div>
                    <hr className='mb-3' />
                    <Link to={`/quiz?category=${value.category}&type=${value.type}&amount=${value.amount}&difficulty=${value.difficulty}`} className="btn btn-primary"><i className="fa-sharp fa-regular fa-circle-play"></i>  Play now</Link>
                </div>
            </div>
        </div>
    )
}

export default Homelist