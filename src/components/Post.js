import React from "react";

const Post = () => {
    return (
        <div>
            <article className="Post">
                <header>
                    <div className="Post-user">
                        <div className="Post-user-avatar">
                            <img
                                src="https://instagram.fktm3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/116790529_166486744935911_302509045610919921_n.jpg?_nc_ht=instagram.fktm3-1.fna.fbcdn.net&_nc_ohc=GFdUhxLIUZQAX-Sj49s&oh=ca0eb5a0ae2f68c8509ad09e120d9608&oe=5F514822"
                                alt="smreeti"/>
                        </div>
                        <div className="Post-user-nickname">
                            <span>smreeti</span>
                        </div>
                    </div>
                </header>
                <div className="Post-image">
                    <div className="Post-image">
                        <img alt="Icon Living"
                             src="https://miro.medium.com/max/3150/2*4OqnAwo7ots9xUQyfos3Ug.jpeg"/>
                    </div>
                </div>
                <div className="Post-caption">
                    <strong>smreeti</strong> ~ Carpe Diem :)
                </div>
            </article>

            <article className="Post">
                <header>
                    <div className="Post-user">
                        <div className="Post-user-avatar">
                            <img src=
                                     "https://instagram.fktm3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/71119752_414306915937766_4106866828154765312_n.jpg?_nc_ht=instagram.fktm3-1.fna.fbcdn.net&_nc_ohc=niehx5yOJD4AX9jJN7i&oh=e8cd8bfac8b862df93e3651a034119b6&oe=5F50B432"
                                 alt="smreeti"/>
                        </div>
                    </div>
                </header>
                <div className="Post-image">
                    <div className="Post-image">
                        <img alt="Icon Living"
                             src="https://instagram.fktm3-1.fna.fbcdn.net/v/t51.2885-15/e35/91058349_146120463406306_7501984827770326349_n.jpg?_nc_ht=instagram.fktm3-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=A85Xtjp722gAX_HVOwN&oh=58d781fe1ced5051405366ae3ec20ae3&oe=5F500256"/>
                    </div>
                </div>
                <div className="Post-caption">

s
                    <button className="fa fa-heart" >Button
                        <i className="fa fa-heart"/></button>
                   <br/>
                    <strong>sabu_shakya</strong> ~ Blue! :)
                </div>
            </article>
        </div>
    )
};

export default Post